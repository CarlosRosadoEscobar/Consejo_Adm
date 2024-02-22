import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent {

  usuario: any;
  primerNombre: string = '';
  primerApellido: string = '';
  contadorSesiones!: number;
  historialInicioSesion!: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _userData: UserDataService,
    private _authService: AuthServiceService
    ) { }

  ngOnInit(): void {

    this.historialInicioSesion = this._authService.getHistorialInicioSesion();
    console.log('historial Inicio Sesion:', this.historialInicioSesion);

    this.contadorSesiones = this._authService.getContadorSesiones();
    console.log('Contador de sesiones:', this.contadorSesiones);

    this.usuario = this._userData.getUsuario();
    console.log('Datos del usuario Dashboard:', this.usuario);

    if (this.usuario && this.usuario.Nombre) {
      this.primerNombre = this.usuario.Nombre.split(' ')[0];
    }
    if (this.usuario && this.usuario.Apellido) {
      this.primerApellido = this.usuario.Apellido.split(' ')[0];
    }


    const sidebar   = document.querySelector('.sidebar');
    const closeBtn  = document.querySelector('#btn');
    const searchBtn = document.querySelector('.bx-search');
    const imgMenu   = document.querySelector('.imgMenu');
    const logoname  = document.querySelector('.logo_name');

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


  convertirTiempo(milisegundos: number): string {
    const segundos = Math.floor(milisegundos / 1000);
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
    return `${horas} horas, ${minutos} minutos y ${segundosRestantes} segundos`;
  }


  logout() {
    const timestampInicioSesion = localStorage.getItem('timestampInicioSesion');
    if (timestampInicioSesion) {
      const tiempoTranscurrido = new Date().getTime() - parseInt(timestampInicioSesion, 10);
      const duracionSesion = this.convertirTiempo(tiempoTranscurrido);

      // Obtener el historial de inicio de sesión del almacenamiento local
      const historialInicioSesion = JSON.parse(localStorage.getItem('historialInicioSesion') || '[]');

      // Agregar la duración de la sesión al último registro de inicio de sesión
      if (historialInicioSesion.length > 0) {
        historialInicioSesion[historialInicioSesion.length - 1].duracionSesion = duracionSesion;
        localStorage.setItem('historialInicioSesion', JSON.stringify(historialInicioSesion));

        // Enviar el historial de inicio de sesión al servidor
        this._authService.enviarHistorialInicioSesion(historialInicioSesion).subscribe(response => {
          console.log('Historial de inicio de sesión enviado al servidor:', response);
        }, error => {
          console.error('Error al enviar el historial de inicio de sesión:', error);
        });
      }
    }

    // Limpiar los datos del usuario del almacenamiento local
    this._userData.clearUserData();

    // Navegar a la página de inicio de sesión
    this.router.navigate(['login']);
  }


}
