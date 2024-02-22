import { Component } from '@angular/core';
import { Documentos } from 'src/app/models/documentos';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-exportar',
  templateUrl: './exportar.component.html',
  styleUrls: ['./exportar.component.css']
})
export class ExportarComponent {
 
  listDocumentos : Documentos[] = [];

  constructor(
    private _documentoService : PdfService,
  ){}

  ngOnInit():void{
    this.obtenerDocumentos();
  }

  obtenerDocumentos(){
    this._documentoService.obtenerDocumentos().subscribe(data =>{
      console.log(data);     
      return this.listDocumentos = data;     
    },error=>{
      console.log(error);
    });    
  }





  
}
