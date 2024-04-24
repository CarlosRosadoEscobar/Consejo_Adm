import { Routes } from '@angular/router';
import { ConadmDashboardComponent } from "../modules/modulos/consejo-administracion/conadm-dashboard/conadm-dashboard.component";
import { SliderbarComponent } from "../layout/sliderbar/sliderbar.component";
import { GraficasDocumentosComponent } from '../shared/graficas/consejo-administracion/graficas-documentos/graficas-documentos.component';
import { StatsUsersComponent } from '../shared/application-stats/consejo-administracion/stats-users/stats-users.component';
import { DiagramaEmpresaGeneralComponent } from '../shared/diagramas/diagrama-empresa-general/diagrama-empresa-general.component';

import { MenuAtraccionTalentoComponent } from '../layout/menu/menu-atraccion-talento/menu-atraccion-talento.component';
import { MenuConsejoAdminstracionComponent } from '../layout/menu/menu-consejo-adminstracion/menu-consejo-adminstracion.component';
import { Page404Component } from '../layout/error-servidor/page404/page404.component';
import { TablaVacantesComponent } from '../shared/tablas/atraccion-talento/tabla-vacantes/tabla-vacantes.component';
import { TablaVacantes2Component } from '../shared/tablas/atraccion-talento/tabla-vacantes2/tabla-vacantes2.component';


export const rutasPruebas: Routes = [
    {path:'slidebar',component: SliderbarComponent},
    {path:'graficas', component: GraficasDocumentosComponent},
    {path:'stats-users', component: StatsUsersComponent},
    {path:'menu', component: MenuAtraccionTalentoComponent},
    { path:'pagina-no-encontrada',component:Page404Component},

    {
        path: 'diagrama',
        component:SliderbarComponent,
        children: [
          { path: '', component: DiagramaEmpresaGeneralComponent },
        ]
      },

      {
        path: 'tabla',
        component:SliderbarComponent,
        children: [
          { path: '', component: TablaVacantes2Component },
        ]
      },


];
export const graficas: Routes = [

];