import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { ComercialComponent } from './components/comercial/comercial.component';
import { AdministracionFinanzasComponent } from './components/administracion-finanzas/administracion-finanzas.component';
import { CaezComponent } from './components/caez/caez.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { JuridicoNormativoComponent } from './components/juridico-normativo/juridico-normativo.component';
import { JuridicoCorporativoComponent } from './components/juridico-corporativo/juridico-corporativo.component';
import { PpComponent } from './components/pp/pp.component';
import { RrhhComponent } from './components/rrhh/rrhh.component';
import { TiComponent } from './components/ti/ti.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { ExportarComponent } from './components/exportar/exportar.component';
import { FirmaComponent } from './components/firma/firma.component';
import { ImportarComponent } from './components/importar/importar.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'inicio',component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path: 'modulos/:moduloUrl', component: ModulosComponent },
  {path: 'modulos', component: ModulosComponent },
  {path: 'graficas', component:  GraficasComponent },
  {path: 'exportar', component: ExportarComponent },
  {path: 'firma', component: FirmaComponent },
  {path: 'importar', component:ImportarComponent},


  {path: 'admfin',component: AdministracionFinanzasComponent },
  {path: 'caez',component: CaezComponent },
  {path: 'comercial',component:ComercialComponent },
  {path: 'operaciones',component: OperacionesComponent },
  {path: 'jurnormativo',component: JuridicoNormativoComponent},
  {path: 'jurcorporativo',component: JuridicoCorporativoComponent },
  {path: 'pp',component: PpComponent},
  {path: 'rrhh',component: RrhhComponent},
  {path: 'ti',component: TiComponent},



  // {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
*/
