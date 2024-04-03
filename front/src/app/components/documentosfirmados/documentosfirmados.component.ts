import { Component,OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-documentosfirmados',
  standalone: true,
  imports: [],
  templateUrl: './documentosfirmados.component.html',
  styleUrl: './documentosfirmados.component.css'
})
export class DocumentosfirmadosComponent implements OnDestroy {

  constructor() {
    const pageReloaded = localStorage.getItem('pageReloaded');
    if (!pageReloaded) {
      localStorage.setItem('pageReloaded', 'true');
      window.location.reload();
    }
  }

  ngOnDestroy(): void {
    localStorage.removeItem('pageReloaded');
  }


}
