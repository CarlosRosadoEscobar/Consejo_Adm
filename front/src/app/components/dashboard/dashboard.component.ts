import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  usuario: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userDataService: UserDataService
    ) { }

  ngOnInit(): void {

    this.usuario = this.userDataService.getUsuario();
    console.log('Datos del usuario Dashboard:', this.usuario);



    const sidebar   = document.querySelector('.sidebar');
    const closeBtn  = document.querySelector('#btn');
    const searchBtn = document.querySelector('.bx-search');
    const imgMenu   = document.querySelector('.imgMenu');
    const logoname   = document.querySelector('.logo_name');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (sidebar) {
          sidebar.classList.toggle('open');
          menuBtnChange();
        }
        if (imgMenu) {
          imgMenu.classList.remove('d-none')
          menuBtnChange();
        }
        if (logoname) {
          logoname.classList.remove('d-none')
          menuBtnChange();
        }
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        if (sidebar) {
          sidebar.classList.toggle('open');
          menuBtnChange();
        }
        if (imgMenu) {
          imgMenu.classList.remove('d-none')
          menuBtnChange();
        }
        if (logoname) {
          logoname.classList.remove('d-none')
          menuBtnChange();
        }
      });
    }

    function menuBtnChange() {
      if (sidebar && closeBtn && imgMenu && logoname) {
        if (sidebar.classList.contains('open')) {
          closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
        } else {
          closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
          imgMenu.classList.add('d-none')
          logoname.classList.add('d-none')
        }
      }
    }
  }



}


/*

import { Router, ActivatedRoute, NavigationExtras, RouterStateSnapshot } from '@angular/router';

constructor(private router: Router, private route: ActivatedRoute) { }

Ingresar() {
  // Tu lógica para autenticar al usuario

  this._AuthService.login(usuarioValue, passwordValue).subscribe(response => {
    console.log('Respuesta del servidor:', response);
    if (response.mensaje === 'Autenticación exitosa') {
      console.log('Mensaje del servidor:', response.mensaje);
      console.log('Datos del usuario:', response.usuario);

      // Navega a la página de inicio y pasa los datos del usuario como objeto de estado
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: response.usuario
        }
      };
      this.router.navigate(['inicio'], navigationExtras);
    } else {
      this.toastr.error("Credenciales incorrectas", "Error");
    }
  }, error => {
    console.error('Error:', error);
    this.toastr.error("Error al iniciar sesión", "Error");
  });
}




*/
