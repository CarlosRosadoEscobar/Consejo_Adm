import { Component, ElementRef, ViewChild } from '@angular/core';
import { Documentos } from 'src/app/models/documentos';
import { PdfService } from 'src/app/services/pdf.service';
import { ToastrService } from 'ngx-toastr';
import { NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exportar',
  templateUrl: './exportar.component.html',
  styleUrls: ['./exportar.component.css']
})

export class ExportarComponent {
  listDocumentos: Documentos[] = [];
  subfilaVisible: { [key: number]: boolean } = {};
  isLoading: boolean = true; // Variable para indicar si la carga está en curso
  mostrarBotonFirma: boolean = false; // Nueva propiedad
  
  constructor(private _documentoService: PdfService,  private router : Router , private pdfViewerService: NgxExtendedPdfViewerService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.obtenerDocumentos();
  }
   
  rolcolaborador: string | null = null;

  obtenerDocumentos() {
    const usuariorol = localStorage.getItem('usuario');
    if (usuariorol !== null) {
      // Convertir la cadena JSON a un objeto JavaScript
      const usuario = JSON.parse(usuariorol);
      // Acceder a la propiedad 'id_colaborador'
      this.rolcolaborador = usuario.rol;
      
    } else {
      console.error('El valor almacenado en localStorage es nulo.');
    }

    this.isLoading = true; // Inicia el spinner
    this._documentoService.obtenerDocumentos().subscribe(data => {
      this.listDocumentos = data;
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }
  
  idcolaborador: string | null = null;

  obtenerDocumento(id: number): void {
    const usuarioString = localStorage.getItem('usuario');
    // Verificar si usuarioString no es nulo antes de intentar analizarlo
    if (usuarioString !== null) {
      // Convertir la cadena JSON a un objeto JavaScript
      const usuario = JSON.parse(usuarioString);
      // Acceder a la propiedad 'id_colaborador'
      this.idcolaborador = usuario.id_colaborador;
    } else {
      console.error('El valor almacenado en localStorage es nulo.');
    }
    this._documentoService.obtenerDocumento(id).subscribe(data => {
      console.log(data);
      for (const objeto of data) {
        const sociosFirmas = JSON.parse(objeto.socios_firmas);
        // Buscar el objeto con id_colaborador coincidente
        const socioEncontrado = sociosFirmas.find((socio: { id_colaborador: string; nombre: string; firma: string }) => socio.id_colaborador === this.idcolaborador);
        if (socioEncontrado) {
          console.log('Socio encontrado:', socioEncontrado);
          // Verificar si el documento ya está firmado
          if (socioEncontrado.firma === 'Si') {
            // Si está firmado, ocultar el botón
            this.mostrarBotonFirma = false;
          } else {
            // Si no está firmado, mostrar el botón
            this.mostrarBotonFirma = true;
          }
        } else {
          console.log('No se encontró ningún socio con el id_colaborador del usuario.');
          // Si no se encontró el socio, mostrar el botón
          this.mostrarBotonFirma = false;
        }
      }
    });
  
    if (this.subfilaVisible[id]) {
      this.subfilaVisible[id] = false;
    } else {
      Object.keys(this.subfilaVisible).forEach((key: string) => {
        this.subfilaVisible[+key] = false;
      });
      this.subfilaVisible[id] = true;
    }
  }
  

  
 /*  obtenerDocumento(id: number): void {
    const usuarioString = localStorage.getItem('usuario');
    // Verificar si usuarioString no es nulo antes de intentar analizarlo
    if (usuarioString !== null) {
      // Convertir la cadena JSON a un objeto JavaScript
      const usuario = JSON.parse(usuarioString);
      // Acceder a la propiedad 'id_colaborador'
      this.idcolaborador = usuario.id_colaborador;
    } else {
      console.error('El valor almacenado en localStorage es nulo.');
    }
    
    this._documentoService.obtenerDocumento(id).subscribe(data => {
      console.log(JSON.stringify(data));
      for (const objeto of data) {
        const sociosFirmas = JSON.parse(objeto.socios_firmas);
        // Buscar el objeto con id_colaborador coincidente
        const socioEncontrado = sociosFirmas.find((socio: { id_colaborador: string; nombre: string; firma: string }) => socio.id_colaborador === this.idcolaborador);
        if (socioEncontrado) {
          console.log('Socio encontrado:', socioEncontrado);
          //mostrarBotonFirma a true
          this.mostrarBotonFirma = true;
        } else {
          console.log('No se encontró ningún socio con el id_colaborador del usuario.');
          //mostrarBotonFirma a false
          this.mostrarBotonFirma = false;
        }
      }
    });
    if (this.subfilaVisible[id]) {
      this.subfilaVisible[id] = false;
    } else {
      Object.keys(this.subfilaVisible).forEach((key: string) => {
        this.subfilaVisible[+key] = false;
      });
      this.subfilaVisible[id] = true;
    }
  } */

  public blob: Blob | undefined;
  
  /* public async export(id: number): Promise<void> {
    try {
      this.blob = await this.pdfViewerService.getCurrentDocumentAsBlob();
      const base64String = await this.blobToBase64(this.blob);
      const usuarioS = localStorage.getItem('usuario');
      if (usuarioS) {
        const usuario = JSON.parse(usuarioS);
        const nombre = usuario.Nombre;
        const DOCUMENTOS : Documentos = {
          id:id,
          documento:base64String,
          fecha:'',
          usuario:nombre,
          socios_firmas:''
        }
        this._documentoService.firmarDocumento(id,DOCUMENTOS).subscribe(
          (respuesta) => {
            this.toastr.success('El documento ha sido firmado correctamente','Documento firmado');
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/exportar']);
            });
          },
          (error) => {
            console.error('Error en la suscripción al servicio:', error);
          }
        );
      } else {
        console.error('No se encontró información de usuario en el almacenamiento local.');
      }
    } catch (error) {
      console.error('Error al exportar el PDF como Blob:', error);
    }
  } */

  public async export(id: number): Promise<void> {
    try {
      this.blob = await this.pdfViewerService.getCurrentDocumentAsBlob();
      const base64String = await this.blobToBase64(this.blob);
      const usuarioS = localStorage.getItem('usuario');
  
      if (usuarioS) {
        const usuario = JSON.parse(usuarioS);
        const nombre = usuario.Nombre;
  
        const DOCUMENTOS: Documentos = {
          id: id,
          documento: base64String,
          fecha: '',
          usuario: nombre,
          socios_firmas: '' // Debes actualizar esta propiedad con el JSON actualizado
        };
  
        // Obtener el documento del servicio
        this._documentoService.obtenerDocumento(id).subscribe(data => {
          for (const objeto of data) {
            const sociosFirmas = JSON.parse(objeto.socios_firmas);
  
            // Buscar el objeto con id_colaborador coincidente
            const socioEncontrado = sociosFirmas.find((socio: any) => socio.id_colaborador === this.idcolaborador);
  
            if (socioEncontrado) {
              console.log('Socio encontrado:', socioEncontrado);
  
              // Actualizar el estado de la firma en el JSON del socio
              socioEncontrado.firma = 'Si';
  
              // Convertir la matriz de socios_firmas a una cadena JSON actualizada
              DOCUMENTOS.socios_firmas = JSON.stringify(sociosFirmas);

              console.log(DOCUMENTOS);
              
  
              // Realizar la operación de firmado
              this._documentoService.firmarDocumento(id, DOCUMENTOS).subscribe(
                (respuesta) => {
                  this.toastr.success('El documento ha sido firmado correctamente', 'Documento firmado');
                  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['/exportar']);
                  });
                },
                (error) => {
                  console.error('Error en la suscripción al servicio:', error);
                }
              );
            } else {
              console.log('No se encontró ningún socio con el id_colaborador del usuario.');
            }
          }
        });
      } else {
        console.error('No se encontró información de usuario en el almacenamiento local.');
      }
    } catch (error) {
      console.error('Error al exportar el PDF como Blob:', error);
    }
  }
  

  
  private async blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Error al leer el Blob como Base64.'));
        }
      };
      reader.onerror = () => {
        reject(new Error('Error al leer el Blob como Base64.'));
      };
      reader.readAsDataURL(blob);
    });
  }


  

  
}
