import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { UserDataService } from '../../data/services/user-data.service';
import { AuthServiceService } from '../../data/services/auth-service.service';
import * as ApexCharts from 'apexcharts';
import { ChartOptions } from './chart.interface';


import { single, multi, paises, countrys } from './data';

@Component({
  selector: 'app-paneldashboard',
  templateUrl: './paneldashboard.component.html',
  styleUrls: ['./paneldashboard.component.css']
})
export class PaneldashboardComponent implements OnInit {

  chartOptions: ChartOptions;

  data: any[] = [];

  single =[];
  view: [number,number] = [1000, 300];

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
      Object.assign(this, { single, multi, paises });
      this.chartOptions = {} as ChartOptions;
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



  ngOnInit(): void {

    this.chartOptions = {
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


}

