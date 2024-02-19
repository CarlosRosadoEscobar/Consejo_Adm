import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(usuario: string, password: string): Observable<any> {
    const url = 'http://localhost:3000/usuario';

    const datosLogin = {
      usuario: usuario,
      password: password
    };

    return this.http.post(url, datosLogin);
  }

}
