import { Routes } from '@angular/router';
import { SliderbarComponent } from "../../shared/sliderbar/sliderbar.component";
import { AdminDashboardComponent } from '../../modules/modulos/administrador/admin-dashboard/admin-dashboard.component';
import { AdminUsuariosRegistroComponent } from '../../modules/modulos/administrador/admin-usuarios-registro/admin-usuarios-registro.component';

export const adminstrador: Routes = [
    {
        path: 'inicio-administrador',
        component:SliderbarComponent,
        children: [
          { path: '', component: AdminDashboardComponent },
        ]
    },
    {
      path: 'registro-usuario',
      component:SliderbarComponent,
      children: [
        { path: '', component: AdminUsuariosRegistroComponent },
      ]
  },
  ];

