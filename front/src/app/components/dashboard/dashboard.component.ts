import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor() { }

  ngOnInit(): void {
    const sidebar   = document.querySelector('.sidebar');
    const closeBtn  = document.querySelector('#btn');
    const searchBtn = document.querySelector('.bx-search');
    const imgMenu   = document.querySelector('.imgMenu');
    const logoname   = document.querySelector('.logo_name');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (sidebar) {
          sidebar.classList.toggle('open');
          menuBtnChange();
        }
        if (imgMenu) {
          imgMenu.classList.remove('d-none')
          menuBtnChange();
        }
        if (logoname) {
          logoname.classList.remove('d-none')
          menuBtnChange();
        }
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        if (sidebar) {
          sidebar.classList.toggle('open');
          menuBtnChange();
        }
        if (imgMenu) {
          imgMenu.classList.remove('d-none')
          menuBtnChange();
        }
        if (logoname) {
          logoname.classList.remove('d-none')
          menuBtnChange();
        }
      });
    }

    function menuBtnChange() {
      if (sidebar && closeBtn && imgMenu && logoname) {
        if (sidebar.classList.contains('open')) {
          closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
        } else {
          closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
          imgMenu.classList.add('d-none')
          logoname.classList.add('d-none')
        }
      }
    }
  }



}
