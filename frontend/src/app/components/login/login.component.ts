import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioForm : FormGroup

  constructor(private fb:FormBuilder,
              private router: Router) {
    this.usuarioForm = fb.group({
      usuario:['',Validators.required],         
      password:['',Validators.required]         
    });
  }

  ngOnInit(): void {
  }

  Ingresar(){  

    const USUARIO : Usuarios = {
      usuario : this.usuarioForm.get('usuario')?.value,
      password : this.usuarioForm.get('password')?.value,
    }
    

    if (this.usuarioForm.invalid) {
      alert('Error: Invalid form');
    } else {
      // Navigate to the 'inicio' route if the form is valid
      this.router.navigate(['inicio']);
    }
    
    



    
  
  }

}
