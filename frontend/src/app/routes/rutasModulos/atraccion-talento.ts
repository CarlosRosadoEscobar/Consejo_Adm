import { Routes } from '@angular/router';
import { SliderbarComponent } from "../../layout/sliderbar/sliderbar.component";
import { AdtDashboardComponent } from '../../modules/modulos/atraccion-talento/adt-dashboard/adt-dashboard.component';
import { AdtRequerimientoComponent } from '../../modules/modulos/atraccion-talento/adt-requerimiento/adt-requerimiento.component';
import { AdtBitacoraComponent } from '../../modules/modulos/atraccion-talento/adt-bitacora/adt-bitacora.component';
import { AdtDocumentosComponent } from '../../modules/modulos/atraccion-talento/adt-documentos/adt-documentos.component';

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
        { path: 'bitacoras', component: AdtBitacoraComponent },
      ]
    },
    {
      path: 'documentos-atraccion-talento',
      component:SliderbarComponent,
      children: [
        { path: '', component: AdtDocumentosComponent },
      ]
    },
    
];