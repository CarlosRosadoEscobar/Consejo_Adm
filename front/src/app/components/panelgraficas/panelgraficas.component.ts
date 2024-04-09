import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { UserDataService } from '../../data/services/user-data.service';
import { AuthServiceService } from '../../data/services/auth-service.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { ChartOptionss } from './chart.interface';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-panelgraficas',
  templateUrl: './panelgraficas.component.html',
  styleUrls: ['./panelgraficas.component.css']
})
export class PanelgraficasComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public splineChartOptions: Partial<ChartOptions>;
  public polarAreaChartOptions: Partial<ChartOptions>;
  public horizontalBarChartOptions: Partial<ChartOptions>;
  public pieChartOptiosns?: Partial<ChartOptions>;



  chartOptionss: ChartOptionss;

  single =[];
  view: [number,number] = [1000, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _userData: UserDataService,
    private _authService: AuthServiceService,
    ) {
      Object.assign(this, { single });

      this.chartOptions = {
        series: [
          {
            name: "My-series",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }
        ],
        chart: {
          height: 350,
          type: "bar"
        },
        title: {
          text: "GRAFICAS DE BARRAS"
        },
        xaxis: {
          categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
        }
      };
      this.splineChartOptions = {
        series: [
          {
            name: "Series 1",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
          }
        ],
        chart: {
          height: 350,
          type: "line", // Tipo de gráfico: Spline es un tipo de línea en ApexCharts
          zoom: {
            enabled: false
          }
        },
        title: {
          text: "Gráfico de Spline"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
        }
      };
      this.polarAreaChartOptions = {
        series: [
          {
            name: 'Series 1',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ],
        chart: {
          height: 350,
          type: "polarArea"
        },
        title: {
          text: "Gráfico de Área Polar"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
        }
      };
      this.horizontalBarChartOptions = {
        series: [
          {
            name: "Series 1",
            data: [44, 55, 41, 67, 22, 43]
          }
        ],
        chart: {
          type: "bar",
          height: 350
        },
        xaxis: {
          categories: ['A', 'B', 'C', 'D', 'E', 'F']
        },
        title: {
          text: 'Gráfico de Barras Horizontal'
        }
      };
      this.pieChartOptiosns = {
        series: [ // Aquí deberías tener un array de objetos
          {
            name: "Series 1", // Nombre de la serie
            data: [44, 55, 13, 43, 22] // Datos de la serie
          }
        ],
        chart: {
          type: "pie",
          height: 350
        },
        title: {
          text: "Gráfico de Pastel"
        }
      };
      this.chartOptionss = {} as ChartOptionss;


    }


  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  usuario: any;
  primerNombre: string = '';
  primerApellido: string = '';
  contadorSesiones!: number;
  historialInicioSesion!: any[];


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

    /* ******************************** */

    this.chartOptionss = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      series: [
        {
          name: "New users",
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: "#1A56DB",
        },
      ],
      xaxis: {
        categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(document.getElementById("area-chart"), this.chartOptions);
      chart.render();
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
