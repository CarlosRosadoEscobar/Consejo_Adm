import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private sessionStartTimeKey = 'sessionStartTime';
  private usuarioKey = 'usuario'
  private usuario: any;

  constructor() { }

  setUsuario(usuario: any) {
    localStorage.setItem(this.usuarioKey, JSON.stringify(usuario));
  }

  getUsuario() {
    const usuarioString = localStorage.getItem(this.usuarioKey);
    return usuarioString ? JSON.parse(usuarioString) : null;
  }

  clearUserData() {
    localStorage.removeItem(this.usuarioKey);
  }

}
