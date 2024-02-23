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

    // const url = 'https://7736-189-203-150-5.ngrok-free.app/usuario';

    const datosLogin = {
      usuario: usuario,
      password: password
    };

    return this.http.post(url, datosLogin);
  }

  getContadorSesiones(): number {
    const contadorSesiones = localStorage.getItem('contadorSesiones');
    return contadorSesiones ? parseInt(contadorSesiones) : 0;
  }

  getHistorialInicioSesion(): any[] {
    const historialInicioSesion = localStorage.getItem('historialInicioSesion');
    return historialInicioSesion ? JSON.parse(historialInicioSesion) : [];
  }

  enviarHistorialInicioSesion(historialInicioSesion: any[]): Observable<any> {
    const url = 'http://localhost:3000/registro';
    return this.http.post(url, historialInicioSesion);
  }

}




