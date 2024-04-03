import { Component, OnDestroy  } from '@angular/core';


@Component({
  selector: 'app-documentosinfirmar',
  standalone: true,
  imports: [],
  templateUrl: './documentosinfirmar.component.html',
  styleUrl: './documentosinfirmar.component.css'
})
export class DocumentosinfirmarComponent implements OnDestroy {


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
