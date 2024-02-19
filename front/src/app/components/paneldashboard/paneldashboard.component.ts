import { ApiServiceService } from 'src/app/services/api.service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paneldashboard',
  templateUrl: './paneldashboard.component.html',
  styleUrls: ['./paneldashboard.component.css']
})
export class PaneldashboardComponent implements OnInit {

  data: any[] = [];

  constructor(
    private ApiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.ApiService.getData().subscribe( data => {
      this.data = data;
      console.log("data: ", data);

    })
  }

}
