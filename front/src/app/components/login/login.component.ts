import { Usuarios } from 'src/app/models/usuarios';
import { AuthServiceService } from '../../services/auth-service.service';
import { UserDataService } from '../../services/user-data.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras,ActivatedRoute,RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any[] = [];
  usuarioForm : FormGroup

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _AuthService: AuthServiceService,
    private route: ActivatedRoute,
    private _userDataService: UserDataService

  )
  {
    this.usuarioForm = fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  mostrarMensajeError(error: string) {

    switch (error) {
      case 'campos_vacios':
        this.toastr.error("Tanto el usuario como la contraseña son obligatorios");
        break;
      case 'usuario_requerido':
        this.toastr.error("El campo usuario es obligatorio");
        break;
      case 'contrasena_requerida':
        this.toastr.error("El campo contraseña es obligatorio");
        break;
      case 'credenciales_invalidas':
        this.toastr.error("Usuario o contraseña incorrectos");
        break;
      case 'error_conexion':
        this.toastr.error("Ocurrió un error al conectar con el servidor. Inténtalo de nuevo más tarde");
        break;
        case 'error_autentificar':
          this.toastr.error("usuario no auntentificado");
          break;
      default:
        this.toastr.error("Ocurrió un error inesperado. Contacta al administrador");
    }

  }



  Ingresar() {
    const usuarioValue = this.usuarioForm.get('usuario')?.value;
    const passwordValue = this.usuarioForm.get('password')?.value;

    if (usuarioValue.trim() === '' && passwordValue.trim() === '') {
      this.mostrarMensajeError('campos_vacios');
    } else if (usuarioValue.trim() === '') {
      this.mostrarMensajeError('usuario_requerido');
    } else if (passwordValue.trim() === '') {
      this.mostrarMensajeError('contrasena_requerida');
    } else if (this.usuarioForm.invalid) {
      console.log("error de formulario: ", this.usuarioForm.invalid);
    } else {
      this._AuthService.login(usuarioValue, passwordValue).subscribe (
        response => {
          if (response.mensaje === 'Autenticación exitosa') {
            this._userDataService.setUsuario(response.usuario);
            const timestampInicioSesion = new Date().getTime();
            localStorage.setItem('timestampInicioSesion', timestampInicioSesion.toString());
            let contadorSesiones = localStorage.getItem('contadorSesiones');
            if (!contadorSesiones) {
              contadorSesiones = '1';
            } else {
              contadorSesiones = (parseInt(contadorSesiones) + 1).toString();
            }
            const historialInicioSesion = JSON.parse(localStorage.getItem('historialInicioSesion') || '[]');
            const usuario = response.usuario;
            historialInicioSesion.push({ usuario, timestampInicioSesion });
            localStorage.setItem('historialInicioSesion', JSON.stringify(historialInicioSesion));
            localStorage.setItem('contadorSesiones', contadorSesiones);
            this.router.navigate(['inicio']);
          }
        },
        error => {
          if (error.status === 401) {
            this.mostrarMensajeError('credenciales_invalidas');
          } else if (error.status === 500) {
            this.mostrarMensajeError('error_conexion');
          } else {
            this.mostrarMensajeError('error_desconocido');
          }
        }
      );
    }
  }










}

