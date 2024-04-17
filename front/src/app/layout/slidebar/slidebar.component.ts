import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { UserDataService } from '../../data/services/user-data.service';
import { AuthServiceService } from '../../data/services/auth-service.service';
import { authGuard } from '../../core/guards/auth.guard';


@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {

  menuItems = [
    { routerLink: '/inicio', iconClass: 'bx bx-grid-alt', label: 'Dashboard' },
    { routerLink: '/modulos', iconClass: 'bx bx-collection', label: 'Módulos' },
    { routerLink: '/graficas', iconClass: 'bx bx-pie-chart-alt-2', label: 'Gráficas' },
    { routerLink: '/exportar', iconClass: 'bx bx-folder', label: 'Exportar' }
  ];

  usuario: any;
  primerNombre: string = '';
  primerApellido: string = '';
  isSidebarOpen: boolean = false;
  contadorSesiones!: number;
  historialInicioSesion!: any[];


  constructor(
    private router: Router,
    private _userData: UserDataService,
    private _authService: AuthServiceService,
    private authGuard: authGuard
  ) { }

  ngOnInit(): void {

    this.historialInicioSesion = this._authService.getHistorialInicioSesion();
    console.log('historial Inicio Sesion:', this.historialInicioSesion);

    this.contadorSesiones = this._authService.getContadorSesiones();
    console.log('Contador de sesiones:', this.contadorSesiones);


    this.usuario = this._userData.getUsuario();
    if (this.usuario && this.usuario.Nombre) {
      this.primerNombre = this.usuario.Nombre.split(' ')[0];
    }
    if (this.usuario && this.usuario.Apellido) {
      this.primerApellido = this.usuario.Apellido.split(' ')[0];
    }
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log('Sidebar abierto:', this.isSidebarOpen);
  }


  convertirTiempo(milisegundos: number): string {
    const segundos = Math.floor(milisegundos / 1000);
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
    return `${horas} horas, ${minutos} minutos y ${segundosRestantes} segundos`;
  }

  logout(): void {
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

    this._authService.logout();
    // Navegar a la página de inicio de sesión
    this.router.navigate(['login']);
  }
}
