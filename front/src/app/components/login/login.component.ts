import { AuthServiceService } from '../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any[] = [];
  usuarioForm : FormGroup

  constructor(private fb:FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _AuthService: AuthServiceService,
              ) {
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
        console.log('Respuesta del servicio:', response);

      }, error => {
        console.error('Error:', error);
        this.toastr.error("Error al iniciar sesión", "Error");
      });
    }
  }


}

