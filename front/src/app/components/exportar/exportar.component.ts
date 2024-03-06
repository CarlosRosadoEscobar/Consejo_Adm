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


  constructor(private _documentoService: PdfService,  private router : Router , private pdfViewerService: NgxExtendedPdfViewerService, private toastr: ToastrService) {
  }



  ngOnInit(): void {
    this.obtenerDocumentos();
    let id =12;

    this._documentoService.obtenerDocumento(id).subscribe(
      (response) => {
        // console.log('Raw Response:', response);
        try {
          const parsedResponse = JSON.parse(response);
          // console.log('Parsed Response:', parsedResponse);
        } catch (parseError) {
          console.error('Error parsing JSON:', parseError);
        }
      },(error) => {
        console.error('Error:', error);
      }
    );
  }

  obtenerDocumentos() {
    this.isLoading = true; // Inicia el spinner
    this._documentoService.obtenerDocumentos().subscribe(data => {
      // console.log(data);
      this.listDocumentos = data;
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }

  obtenerDocumento(id: number): void {
    if (this.subfilaVisible[id]) {
      this.subfilaVisible[id] = false;
    }else{
      Object.keys(this.subfilaVisible).forEach((key: string) => {
        this.subfilaVisible[+key] = false;
      });
      this.subfilaVisible[id] = true;
    }
  }

  public blob: Blob | undefined;

  // DEscargar
  /* public async export(): Promise<void> {
    try {
      this.blob = await this.pdfViewerService.getCurrentDocumentAsBlob();
      console.log('PDF exportado como Blob exitosamente.');
    } catch (error) {
      console.error('Error al exportar el PDF como Blob:', error);
    }
  }

  public downloadBlob(): void {
    if (this.blob) {
      const url = window.URL.createObjectURL(this.blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'documento.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
  } */
  

  public async export(id: number): Promise<void> {
    try {
      this.blob = await this.pdfViewerService.getCurrentDocumentAsBlob();
      const base64String = await this.blobToBase64(this.blob);
      const usuarioS = localStorage.getItem('usuario');

      // console.log(base64String);
      
  
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
            // Lógica para manejar la respuesta del servicio
            // console.log('Respuesta del servicio:', respuesta);
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
  

  



  /* showSaveButtonOption = 'visible';
  onPdfViewerEvent() {
    console.log('Inicio de impresión');
  }
  showPrintButtonOption = 'visible';

  onBeforePrint() {
    console.log('Inicio de impresión');
  }

  onAfterPrint() {
    console.log('Impresión completada o cancelada');
  } */




  /* exportPdf() {
    const pdfViewer = document.querySelector('ngx-extended-pdf-viewer');
    if (pdfViewer) {
      pdfViewer.download();
      // Alternatively, you can use pdfViewer.download() to trigger download.
    }
  } */

}
