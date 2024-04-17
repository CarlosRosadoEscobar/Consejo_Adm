import { Routes } from '@angular/router';
import { SliderbarComponent } from "../../shared/sliderbar/sliderbar.component";
import { AdtDashboardComponent } from '../../modules/modulos/atraccion-talento/adt-dashboard/adt-dashboard.component';
import { AdtRequerimientoComponent } from '../../modules/modulos/atraccion-talento/adt-requerimiento/adt-requerimiento.component';
import { AdtBitacoraComponent } from '../../modules/modulos/atraccion-talento/adt-bitacora/adt-bitacora.component';

export const atraccionTalento: Routes = [
    {
      path: 'inicio-atraccion-talento',
      component:SliderbarComponent,
      children: [
        { path: '', component: AdtDashboardComponent },
      ]
    },
    {
      path: 'solicitudes',
      component:SliderbarComponent,
      children: [
        { path: 'requerimientos', component: AdtRequerimientoComponent },
        { path: 'Bitacoras', component: AdtBitacoraComponent },
      ]
    },
    
];