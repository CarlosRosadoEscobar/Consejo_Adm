import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-conadm-documentos',
  templateUrl: './conadm-documentos.component.html',
  styleUrl: './conadm-documentos.component.css'
})
export class ConadmDocumentosComponent  implements OnInit{

  ngOnInit(): void {
    initFlowbite();
  }

}
