import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documentos } from '../models/documentos';

@Injectable({
  providedIn: 'root'
})
export class PdfService {


  private url = "http://localhost:3000/documentos/"

  // private url = "https://7736-189-203-150-5.ngrok-free.app/documentos/"


  constructor(private http:HttpClient) { }

  obtenerDocumentos() : Observable<any>{
    return this.http.get(this.url);
  }

  guardarDocumento(documento : Documentos) : Observable<any>{
    return this.http.post(this.url,documento);
  }

  obtenerDocumento(id:number)  :Observable<any> {
    return  this.http.get(this.url + id);
  }



  

}
