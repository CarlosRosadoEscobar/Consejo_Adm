import { NotFoundComponent } from './components/not-found/not-found.component';
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
// import { ImportarComponent } from './components/importar/importar.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';
import { PanelexportarComponent } from './components/panelexportar/panelexportar.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { MfaComponent } from './components/mfa/mfa.component';
import { authGuard } from './guards/auth.guard';
import { PanelimportarComponent } from './components/panelimportar/panelimportar.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'resgitro',component:RegistroUsuarioComponent},

  {path:'inicio',component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'verificacion', component:MfaComponent},

  //token
  // {path:'login',
  //  canMatch:[authGuard],
  //  loadComponent: () => import('./components/login/login.component').then(comp => comp.LoginComponent)},
  // {path:'**', loadComponent: () => import('./components/not-found/not-found.component').then(comp => comp.NotFoundComponent)},


  {path: 'modulos/:moduloUrl', component: ModulosComponent },
  {path: 'modulos', component: ModulosComponent },
  {path: 'graficas', component:  GraficasComponent },
  {path: 'exportarr', component: ExportarComponent },
  {path: 'firma', component: FirmaComponent },
<<<<<<< HEAD
  {path: 'importar', component:ImportarComponent},
  {path: 'exportar', component:PanelexportarComponent},
=======
  {path: 'importar', component:PanelimportarComponent},
  {path:'exportar', component:PanelexportarComponent},
>>>>>>> d7319ad07b1d8b32e1ab0b864d441188ab873645



  {path: 'admfin',component: AdministracionFinanzasComponent },
  {path: 'caez',component: CaezComponent },
  {path: 'comercial',component:ComercialComponent },
  {path: 'operaciones',component: OperacionesComponent },
  {path: 'jurnormativo',component: JuridicoNormativoComponent},
  {path: 'jurcorporativo',component: JuridicoCorporativoComponent },
  {path: 'pp',component: PpComponent},
  {path: 'rrhh',component: RrhhComponent},
  {path: 'ti',component: TiComponent},
  {path: 'visualizar/:id', component:VisualizarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

