import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite'

@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrl: './sliderbar.component.css'
})
export class SliderbarComponent implements OnInit {

  ngOnInit(): void {
    initFlowbite();
  }

  menuItems = [
    { routerLink: '/inicio',   iconClass: 'bx bx-grid-alt',         label: 'Dashboard' },
    { routerLink: '/modulos',  iconClass: 'bx bx-collection',       label: 'Módulos' },
    { routerLink: '/graficas', iconClass: 'bx bx-pie-chart-alt-2',  label: 'Gráficas' },
    { routerLink: '/exportar', iconClass: 'bx bx-folder',           label: 'Exportar' }
  ];


}
