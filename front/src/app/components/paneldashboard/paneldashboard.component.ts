import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { AuthServiceService } from '../../services/auth-service.service';


import { single, multi, paises, countrys } from './data';

@Component({
  selector: 'app-paneldashboard',
  templateUrl: './paneldashboard.component.html',
  styleUrls: ['./paneldashboard.component.css']
})
export class PaneldashboardComponent implements OnInit {

  data: any[] = [];

  /* *************************Grafica 1*********************************++ */
  single =[];
  view: [number,number] = [1000, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;


   /* ************************Grafica 2*************************** */

  //  multi =[];
  //  view_multi: [number,number] = [1000,500];

  //  // options
  //  legend: boolean = true;
  //  showLabelss: boolean = true;
  //  animations: boolean = true;
  //  xAxis: boolean = true;
  //  yAxis: boolean = true;
  //  showYAxisLabel: boolean = true;
  //  showXAxisLabel: boolean = true;
  //  xAxisLabel: string = 'Year';
  //  yAxisLabel: string = 'Population';
  //  timeline: boolean = true;


 /* ***********************grafica 3 **************************** */

//  paises = [];
//  views_a: [number,number] = [900, 500];

//   // options
//   showLegends: boolean = true;
//   showLabelsss: boolean = true;




  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _userData: UserDataService,
    private _authService: AuthServiceService,
    ) {
      Object.assign(this, { single, multi, paises });
    }

/* ***********************grafica 4 **************************** */

// countrys = [];
// views_b: [number,number] = [500, 500];

// // options
// showXAxis: boolean = true;
// showYAxis: boolean = true;


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
  }


}


/*

ahora en la parte del view
view: [number,number] = [1000, 250];

quiero cambiar el valor pero desde css con mis breack points


*/
