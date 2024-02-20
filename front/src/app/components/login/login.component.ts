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
    private userDataService: UserDataService

  )
  {
    this.usuarioForm = fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  Ingresar() {
    const usuarioValue = this.usuarioForm.get('usuario')?.value;
    const passwordValue = this.usuarioForm.get('password')?.value;

    // console.log('Usuario:', usuarioValue);
    // console.log('Contraseña:', passwordValue);

    if (this.usuarioForm.invalid) {
      this.toastr.error("Todos los campos son obligatorios", "Error de validación");
    } else {


      this._AuthService.login(usuarioValue, passwordValue).subscribe(response => {
        if (response.mensaje === 'Autenticación exitosa') {
          this.userDataService.setUsuario(response.usuario);

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
      });



    }
  }


}

