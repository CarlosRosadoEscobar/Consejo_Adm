import { Component, OnDestroy  } from '@angular/core';



@Component({
  selector: 'app-documentostodos',
  standalone: true,
  imports: [],
  templateUrl: './documentostodos.component.html',
  styleUrl: './documentostodos.component.css'
})
export class DocumentostodosComponent implements OnDestroy {

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
