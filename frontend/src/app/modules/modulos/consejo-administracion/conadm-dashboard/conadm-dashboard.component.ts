import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-conadm-dashboard',
  templateUrl: './conadm-dashboard.component.html',
  styleUrl: './conadm-dashboard.component.css'
})
export class ConadmDashboardComponent implements OnInit {

  ngOnInit(): void {
    initFlowbite();
  }

}
