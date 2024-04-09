import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './config';


@Injectable({
  providedIn: 'root'
})
export class MfaService {

  private url = `${environment.apiUrl}/mfa-sms/`;

  constructor(private http: HttpClient) { }

  enviarCodigo(codigo: string): Observable<any> {
    return this.http.post<any>(`${this.url}`, { codigo });
  }

}

