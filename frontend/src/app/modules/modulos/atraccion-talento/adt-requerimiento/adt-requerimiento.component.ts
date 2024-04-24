import { Component, SimpleChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-adt-requerimiento',
  templateUrl: './adt-requerimiento.component.html',
  styleUrl: './adt-requerimiento.component.css'
})
export class AdtRequerimientoComponent implements OnInit  {
  
  ngOnInit(): void {
    initFlowbite();    
  }

}
