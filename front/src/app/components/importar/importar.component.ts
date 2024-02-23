import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Documentos } from 'src/app/models/documentos';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-importar',
  templateUrl: './importar.component.html',
  styleUrl: './importar.component.css'
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
      documento : ['',Validators.required]
    })    
  }

  ngOnInit() : void {

  }

  guardarDocumento(){
    /* const DOCUMENTO : Documentos = {
      documento : this.documentoForm.get('documento')?,
    }
    
    console.log(DOCUMENTO);

    this._documentoService.guardarDocumento(DOCUMENTO).subscribe(data =>{
      
      console.log(data);
      

      this.toastr.success('El producto ha sido guardado correctamente');
      this.router.navigate(['/exportar'],{state:{doc:DOCUMENTO}})

    }); */


    const fileInput = document.getElementById('documento') as HTMLInputElement;
    const file = fileInput.files![0];

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Lógica para enviar base64String al servidor (por ejemplo, mediante una solicitud HTTP)

      const  DOCUMENTO : Documentos = {
        id:0,
        documento : base64String,
        fecha:''
      }


      this._documentoService.guardarDocumento(DOCUMENTO).subscribe(data =>{
        this.toastr.success('El producto ha sido guardado correctamente');
        this.router.navigate(['/exportar'],{state:{doc:DOCUMENTO}})
      });

      
    };
    reader.readAsDataURL(file);

    

  }





}
