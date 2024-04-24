import { Routes } from '@angular/router';
import { LoginComponent } from '../modules/auth/login/login.component';
import { VerificacionComponent } from '../modules/auth/verificacion/verificacion.component';
import { SliderbarComponent } from '../layout/sliderbar/sliderbar.component';

//!
import { MiPerfilComponent } from '../layout/perfil/mi-perfil/mi-perfil.component';
import { MiPerfilConfiguracionComponent } from '../layout/perfil/mi-perfil-configuracion/mi-perfil-configuracion.component';
import { AcercardeComponent } from '../layout/perfil/acercarde/acercarde.component';
import { Page404Component } from '../layout/error-servidor/page404/page404.component';

export const rutasPrincipales: Routes = [
  { path:'', component:LoginComponent },
  { path:'login', component:LoginComponent },
  { path:'verificacion',component:VerificacionComponent},
  { path: '**', component:Page404Component }

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
    path: 'configuracion-perfil',
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

];
