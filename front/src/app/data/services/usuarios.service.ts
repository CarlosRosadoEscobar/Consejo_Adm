import { Injectable } from '@angular/core';
import { environment } from './config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = `${environment.apiUrl}/usuarios/`;

  constructor(private http:HttpClient) {}

  obtenerUsuario(): Observable<any>{
    return this.http.get(this.url);
  }


}
