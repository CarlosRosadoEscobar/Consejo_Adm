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
  intentosFallidos: number = 0;
  bloqueoActivo: boolean = false;
  segundosRestantes: number = 0;
  bloqueadoIndefinido: boolean = false;
  contadorIntentosConsecutivos: number = 0;
  bloqueoEjecutado: boolean = false;


  activarBloqueo(): void {
    this.bloqueoActivo = true;
  }

  minutosRestantes(): number {
    return Math.floor(this.segundosRestantes / 60);
  }

  segundosRestantesCalculados(): number {
    return this.segundosRestantes % 60;
  }

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _AuthService: AuthServiceService,
    private route: ActivatedRoute,
    private _userDataService: UserDataService,
  )
  {
    this.usuarioForm = fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    });
  }

  ngOnInit(): void {

    const intentosFallidosString = localStorage.getItem('intentosFallidos');
    if (intentosFallidosString) {
      this.intentosFallidos = parseInt(intentosFallidosString, 10);
    }

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
        return;
    } else if (usuarioValue.trim() === '') {
        this.mostrarMensajeError('usuario_requerido');
        return;
    } else if (passwordValue.trim() === '') {
        this.mostrarMensajeError('contrasena_requerida');
        return;
    } else if (this.usuarioForm.invalid) {
        console.log("error de formulario: ", this.usuarioForm.invalid);
        return;
    }

    this._AuthService.login(usuarioValue, passwordValue).subscribe(
        response => {
            if (response.mensaje === 'Autenticación exitosa') {
                this.intentosFallidos = 0;
                localStorage.setItem('intentosFallidos', this.intentosFallidos.toString());
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
            else if(response.mensaje === 'Usuario0'){
              console.log("usuario 0");
              this.router.navigate(['verificacion']);
            }

            /*

            mira tengo mi componente en angular
            y quiero tengo

            */



        },
        error => {
            if (error.status === 401) {
                this.intentosFallidos++;
                let intentosFallidosData: any[] = JSON.parse(localStorage.getItem('intentosFallidosData') || '[]');
                const nuevoIntentoFallido = {
                    intentosFallidos: this.intentosFallidos,
                    usuarioValue: usuarioValue,
                    passwordValue: passwordValue
                };
                intentosFallidosData.push(nuevoIntentoFallido);
                localStorage.setItem('intentosFallidosData', JSON.stringify(intentosFallidosData));

                if (this.intentosFallidos === 3 && this.contadorIntentosConsecutivos === 0) {
                    console.log('Se han producido tres intentos fallidos consecutivos.');
                    this.bloquearCampos();
                    this.contadorIntentosConsecutivos++;

                    this._AuthService.enviarCredencialesFallidas(usuarioValue, passwordValue).subscribe (
                      response => {
                      },
                      error => {
                        console.error('Error al enviar credenciales fallidas al backend:', error);
                      }

                    )

                } else if (this.intentosFallidos === 3 && this.contadorIntentosConsecutivos === 1) {
                  console.log('Se han producido otros tres intentos fallidos consecutivos.');
                  this.bloquearCampos();
                  this.contadorIntentosConsecutivos++;
                  this.bloqueadoIndefinido = true; // Se establece como bloqueado indefinidamente
                  console.log("Usuario bloqueado indefinidamente");

                  this._AuthService.bloquearUsuario(usuarioValue, passwordValue).subscribe(
                    response => {
                    },
                    error => {
                      console.error('Error al bloquear usuario:', error);
                    }
                  );
                } else if (this.intentosFallidos >= 3 && !this.bloqueadoIndefinido) {
                    console.log('Se han producido tres intentos fallidos.');
                    this.bloquearCampos();
                } else {
                    this.mostrarMensajeError('credenciales_invalidas');
                }
            } else if (error.status === 403){
              // console.log("error.status: ",error);
              this.toastr.error("Usuario sin permisos");
            }


            else if (error.status === 500) {
                this.mostrarMensajeError('error_conexion');
            } else {
                this.mostrarMensajeError('error_desconocido');
            }
        }
    );
  }

  bloquearCampos() {
    if (!this.bloqueoEjecutado) {
      this.bloqueoEjecutado = true;
      this.bloqueoActivo = true;
      this.usuarioForm.disable();
      const tiempoTotal = 5 * 60; //minutos de espera
      this.segundosRestantes = tiempoTotal;
      const intervalo = setInterval(() => {
        this.segundosRestantes--;
        localStorage.setItem('intentosFallidos', this.intentosFallidos.toString());
        if (this.segundosRestantes <= 0) {
          clearInterval(intervalo);
          this.bloqueoActivo = false;
          this.usuarioForm.enable();
          if (!this.bloqueadoIndefinido && this.intentosFallidos < 4) {
            this.intentosFallidos = 0;
            localStorage.setItem('intentosFallidos', this.intentosFallidos.toString());
          } else if (this.intentosFallidos >= 4) {
            this.bloqueadoIndefinido = true;
            console.log("Usuario bloqueado indefinidamente");
          }
        }
      }, 1000);
    }
  }


}
