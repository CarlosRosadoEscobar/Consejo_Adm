import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documentos } from '../models/documentos';
import { environment } from './config';

@Injectable({
  providedIn: 'root'
})
export class PdfService {


  private url = `${environment.apiUrl}/documentos/`;

  constructor(private http:HttpClient) { }

  obtenerDocumentos() : Observable<any>{
    return this.http.get(this.url);
  }

  guardarDocumento(documento : Documentos) : Observable<any>{
    return this.http.post(this.url,documento);
  }

  obtenerDocumento(id: number): Observable<any> {
    return this.http.get(this.url + id, { responseType: 'text' });
  }





}
