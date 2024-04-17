import { Routes } from '@angular/router';
import { LoginComponent } from '../modules/auth/login/login.component';
import { VerificacionComponent } from '../modules/auth/verificacion/verificacion.component';
import { SliderbarComponent } from '../shared/sliderbar/sliderbar.component';

//!
import { MiPerfilComponent } from '../shared/perfil/mi-perfil/mi-perfil.component';
import { MiPerfilConfiguracionComponent } from '../shared/perfil/mi-perfil-configuracion/mi-perfil-configuracion.component';
import { AcercardeComponent } from '../shared/perfil/acercarde/acercarde.component';

export const rutasPrincipales: Routes = [
  { path:'login', component:LoginComponent },
  { path:'verificacion',component:VerificacionComponent},

];

export const rutasCompartidas: Routes = [
  {
    path: 'mi-perfil',
    component:SliderbarComponent,
    children: [
      { path: '', component: MiPerfilComponent },
    ]
  },
  {
    path: 'mi-perfil-configuracion',
    component:SliderbarComponent,
    children: [
      { path: '', component: MiPerfilConfiguracionComponent },
    ]
  },
  {
    path: 'acerca-de',
    component:SliderbarComponent,
    children: [
      { path: '', component: AcercardeComponent },
    ]
  },
  {
    path: 'diagrama-Zascita',
    component:SliderbarComponent,
    children: [
      { path: '', component: MiPerfilComponent },
    ]
  },

];
