import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './config';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isAuthenticated: boolean = false;

  constructor(private http: HttpClient) { }

  login(usuario: string, password: string): Observable<any> {

    const url = `${environment.apiUrl}/usuario`;

    const datosLogin = {
      usuario: usuario,
      password: password
    };

    return this.http.post(url, datosLogin);
  }

  enviarCredencialesFallidas(usuario: string, password: string): Observable<any> {
    const url = `${environment.apiUrl}/credenciales-fallidas`;
    const datosFallidos = {
      usuario: usuario,
      password: password
    };
    return this.http.post(url, datosFallidos);
  }

  bloquearUsuario(usuario: string, password: string): Observable<any> {
    const url = `${environment.apiUrl}/bloquear-usuario`;

    const datosBloqueo = {
      usuario: usuario,
      password: password
    };

    return this.http.post(url, datosBloqueo);
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
    const url = `${environment.apiUrl}/registro`;
    return this.http.post(url, historialInicioSesion);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  loginSuccess(): void {
    this.isAuthenticated = true;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

}




