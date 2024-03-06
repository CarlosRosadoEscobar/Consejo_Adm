import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Documentos } from 'src/app/models/documentos';
import { PdfService } from 'src/app/services/pdf.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Socios } from 'src/app/models/socios';


@Component({
  selector: 'app-importar',
  templateUrl: './importar.component.html',
  styleUrls: ['./importar.component.css']
})
export class ImportarComponent {

  listSocios : Socios[] = [];

  documentoForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private toastr : ToastrService,
    private _documentoService : PdfService,
    private _usuarioService : UsuariosService
  ){
    this.documentoForm = this.fb.group({
      documento : ['', Validators.required],
      colaboradores: this.fb.array([]),
    });
  }

  onFileChange(event: any): void {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const isValidFileType = this.isValidFileType(file);

      if (!isValidFileType) {
        this.toastr.error('Por favor, seleccione un archivo PDF.');
        this.documentoForm.get('documento')?.setValue('');
      }
    }
  }

  isValidFileType(file: File): boolean {
    const allowedTypes = ['application/pdf'];
    return allowedTypes.includes(file.type);
  }



  ngOnInit(){
    this.obtenerUsuarios();
  }

  obtenerUsuarios():void{
    this._usuarioService.obtenerUsuario().subscribe(data => {
      this.listSocios = data;
      console.log(data);
    },error=>{
      console.log(error);
    })
  }

  selectedColaborador: string | null = null;


  getColaboradorName(id: string | null): string {
    if (!id) {
      return 'Ninguno';
    }

    const socio = this.listSocios.find(s => s.id_colaborador === id);
    return socio ? socio.Nombre : 'Ninguno';
  }

  /* getColaboradorName(id: string | null): string {
    const socio = this.listSocios.find(s => s.id_colaborador === id);
    return socio ? socio.Nombre : 'Ninguno';
  } */

  /* agregarColaborador(event: any): void {
    const colaboradorId = event.target.value;
    const colaboradoresArray = this.documentoForm.get('colaboradores') as FormArray;
    colaboradoresArray.push(this.fb.control(colaboradorId,));
    console.log('Colaboradores seleccionados:', colaboradoresArray.value);
  } */

  agregarColaborador(event: any): void {
    const colaboradorId = event.target.value;
    const colaboradorNombre = event.target.options[event.target.selectedIndex].text;
    const colaboradoresArray = this.documentoForm.get('colaboradores') as FormArray;
    // Verificar si el colaborador ya fue seleccionado
    if (colaboradoresArray.value.some((colaborador: { id: string }) => colaborador.id === colaboradorId)) {
      // El colaborador ya ha sido seleccionado, puedes mostrar un mensaje o realizar alguna acción adicional si lo deseas.
      console.log('Colaborador ya seleccionado.');
      return;
    }
    colaboradoresArray.push(this.fb.group({
      id: colaboradorId,
      nombre: colaboradorNombre,
      firma:'No'
    }));

    // Deshabilitar la opción seleccionada
    const colaboradoresOptions = this.listSocios.map(socio => socio.id_colaborador);
    colaboradoresOptions.forEach((optionId: string) => {
      const optionElement = document.getElementById(`option-${optionId}`) as HTMLSelectElement;
      if (optionElement) {
        optionElement.disabled = true;
      }
    });

    // Restablecer el valor seleccionado del select
    event.target.value = 'disabled';

    // Imprimir el arreglo en la consola
    console.log('Colaboradores seleccionados:', colaboradoresArray.value);
  }



  quitarColaborador(index: number): void {
    const colaboradoresArray = this.documentoForm.get('colaboradores') as FormArray;

    // Eliminar el colaborador en la posición 'index'
    colaboradoresArray.removeAt(index);

    // Imprimir el arreglo actualizado en la consola
    console.log('Colaboradores seleccionados:', colaboradoresArray.value);

    // this.guardarDocumento(colaboradoresArray.value);

  }



  guardarDocumento(): void {
    const fileInput = document.getElementById('documento') as HTMLInputElement;
    const file = fileInput.files![0];
    const usuarioS = localStorage.getItem('usuario');

    if (!this.isValidFileType(file)) {
      this.toastr.error('Por favor, seleccione un archivo PDF.');
      return;
    }

    if (!usuarioS) {
      // Handle the case where 'usuario' is not found in localStorage
      return;
    }


    const usuario = JSON.parse(usuarioS);

    const nombre = usuario.Nombre;


    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;

      // console.log(base64String);


      const DOCUMENTO: Documentos = {
        id: 0,
        documento: base64String,
        fecha: '',
        usuario: nombre,
        socios_firmas:''
      };

      console.log(DOCUMENTO);

      this._documentoService.guardarDocumento(DOCUMENTO).subscribe(data => {
        this.toastr.success('El producto ha sido guardado correctamente');
        this.router.navigate(['/exportar'], { state: { doc: DOCUMENTO } });
      });
    };
    reader.readAsDataURL(file);
  }



}
