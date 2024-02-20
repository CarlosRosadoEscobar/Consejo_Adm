import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private usuario: any;

  constructor() { }

  setUsuario(usuario: any) {
    this.usuario = usuario;
  }

  getUsuario() {
    return this.usuario;
  }

}
