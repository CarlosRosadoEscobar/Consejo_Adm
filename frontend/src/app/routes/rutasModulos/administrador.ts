import { Routes } from '@angular/router';
import { SliderbarComponent } from "../../shared/sliderbar/sliderbar.component";
import { AdminFormularioComponent } from '../../modules/modulos/administrador/admin-formulario/admin-formulario.component';

export const consejoAdministracion: Routes = [
    {
        path: 'inicio',
        component:SliderbarComponent,
        children: [
          { path: '', component: AdminFormularioComponent },
        ]
    },
  ];

