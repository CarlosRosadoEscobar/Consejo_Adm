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

    console.log('Usuario:', usuarioValue);
    console.log('Contraseña:', passwordValue);

    if (this.usuarioForm.invalid) {
      this.toastr.error("Todos los campos son obligatorios", "Error de validación");
    } else {

      this._AuthService.login(usuarioValue, passwordValue).subscribe(response => {
        console.log('Respuesta del servidor:', response);
        if (response.mensaje === 'Autenticación exitosa') {
          console.log('Mensaje del servidor:', response.mensaje);
          console.log('Datos del usuario:', response.usuario);

          this.userDataService.setUsuario(response.usuario);

          this.router.navigate(['inicio']);


        } else {
          this.toastr.error("Credenciales incorrectas", "Error");
        }
      }, error => {
        console.error('Error:', error);
        this.toastr.error("Error al iniciar sesión", "Error");
      });


      // ####
    }
  }


}

