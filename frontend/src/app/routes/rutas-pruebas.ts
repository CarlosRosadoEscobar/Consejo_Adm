import { Routes } from '@angular/router';
import { ConadmDashboardComponent } from "../modules/modulos/consejo-administracion/conadm-dashboard/conadm-dashboard.component";
import { SliderbarComponent } from "../shared/sliderbar/sliderbar.component";
import { GraficasDocumentosComponent } from '../shared/graficas/consejo-administracion/graficas-documentos/graficas-documentos.component';
import { StatsUsersComponent } from '../shared/application-stats/consejo-administracion/stats-users/stats-users.component';


export const rutasPruebas: Routes = [
    {path:'slidebar',component: SliderbarComponent},
    {path:'diagrama', component: SliderbarComponent},
    {path:'graficas', component: GraficasDocumentosComponent},
    {path:'stats-users', component: StatsUsersComponent},
];
export const graficas: Routes = [

];