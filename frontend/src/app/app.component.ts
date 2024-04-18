import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { initFlowbite } from 'flowbite';

import { IStaticMethods } from 'preline/preline';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private router: Router){}

  ngOnInit(): void {
    initFlowbite();
    
    /* preline */
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });

  }

}
