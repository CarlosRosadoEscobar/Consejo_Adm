import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';


@Component({
  selector: 'app-graficas-contratacion',
  templateUrl: './graficas-contratacion.component.html',
  styleUrl: './graficas-contratacion.component.css'
})
export class GraficasContratacionComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
    const options = {
      series: [
        {
          name: "Vacantes",
          color: "#31C48D",
          data: ["1420", "1620", "1820", "1420", "1650", "2120"],
        },
        {
          name: "Contratacion",
          data: ["788", "810", "866", "788", "1100", "1200"],
          color: "#F05252",
        }
      ],
      chart: {
        sparkline: {
          enabled: false,
        },
        type: "bar",
        width: "100%",
        height: 400,
        toolbar: {
          show: false,
        }
      },
      fill: { // Define fill solo una vez
        opacity: 1,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "100%",
          borderRadiusApplication: "end",
          borderRadius: 6,
          dataLabels: {
            position: "top",
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        intersect: false,
        formatter: function (value: any) { // Especifica el tipo de value como any
          return "$" + value
        }
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          },
          formatter: function(value: any) { // Especifica el tipo de value como any
            return "$" + value
          }
        },
        categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          }
        }
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -20
        },
      }
    }
    
    if (document.getElementById("bar-chart") && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(document.getElementById("bar-chart"), options);
      chart.render();
    }
  }

}
