import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-panelmodulos',
  templateUrl: './panelmodulos.component.html',
  styleUrls: ['./panelmodulos.component.css']
})
export class PanelmodulosComponent {

  modulos = [
    {"id": 1, "name":"Comercial",                 "Url":"comercial"},
    {"id": 2, "name":"RRHH",                      "Url":"recursos-humanos"},
    {"id": 3, "name":"Jurídico Normativo",        "Url":"juridico-normativo"},
    {"id": 4, "name":"Jurídico Corporativo",      "Url":"juridico-corporativo"},
    {"id": 5, "name":"TI",                        "Url":"tecnologias-informacion"},
    {"id": 6, "name":"Administración y finanzas", "Url":"admistracion-financiera"},
    {"id": 7, "name":"CAEZ",                      "Url":"caez"},
    {"id": 8, "name":"Operaciones",               "Url":"operaciones"},
    {"id": 9, "name":"PP",                        "Url":"pp"},
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const sidebar   = document.querySelector('.sidebar');
    const closeBtn  = document.querySelector('#btn');
    const searchBtn = document.querySelector('.bx-search');
    const imgMenu   = document.querySelector('.imgMenu');
    const logoname  = document.querySelector('.logo_name');

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

  oneSelect(modulo: any) {
    console.log('Módulo seleccionado:', modulo);
    this.router.navigate(['/modulos', modulo.Url]);
  }

}
