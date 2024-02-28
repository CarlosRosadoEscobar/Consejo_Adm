import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Documentos } from 'src/app/models/documentos';
import { PdfService } from 'src/app/services/pdf.service';


@Component({
  selector: 'app-importar',
  templateUrl: './importar.component.html',
  styleUrls: ['./importar.component.css']
})
export class ImportarComponent {

  documentoForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private toastr : ToastrService,
    private _documentoService : PdfService
  ){
    this.documentoForm = this.fb.group({
      documento : ['', Validators.required]
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
  
      const DOCUMENTO: Documentos = {
        id: 0,
        documento: base64String,
        fecha: '',
        usuario: nombre,
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
