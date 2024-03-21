import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ComercialComponent } from './components/comercial/comercial.component';
import { AdministracionFinanzasComponent } from './components/administracion-finanzas/administracion-finanzas.component';
import { CaezComponent } from './components/caez/caez.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { JuridicoNormativoComponent } from './components/juridico-normativo/juridico-normativo.component';
import { JuridicoCorporativoComponent } from './components/juridico-corporativo/juridico-corporativo.component';
import { PpComponent } from './components/pp/pp.component';
import { RrhhComponent } from './components/rrhh/rrhh.component';
import { TiComponent } from './components/ti/ti.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';
import { MfaComponent } from './components/mfa/mfa.component';
import { PaneldashboardComponent } from './components/paneldashboard/paneldashboard.component';
import { PanelmodulosComponent } from './components/panelmodulos/panelmodulos.component';
import { PanelgraficasComponent } from './components/panelgraficas/panelgraficas.component';
import { ImportarComponent } from './components/importar/importar.component';
import { ExportarComponent } from './components/exportar/exportar.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';

const routes: Routes = [
  //! VERIFICACION
  {path:''               ,component:LoginComponent},
  {path:'login'          ,component:LoginComponent},
  {path:'verificacion'   ,component:MfaComponent},

  //! PANELES
  {
    path: 'inicio',
    component:SlidebarComponent,
    children: [
      { path: '', component: PaneldashboardComponent },
    ]
  },
  {
    path: 'modulos',
    component:SlidebarComponent,
    children: [
      { path: '', component: PanelmodulosComponent },
    ]
  },
  {
    path: 'graficas',
    component:SlidebarComponent,
    children: [
      { path: '', component: PanelgraficasComponent },
    ]
  },
  {
    path: 'exportar',
    component:SlidebarComponent,
    children: [
      { path: '', component: ExportarComponent },
    ]
  },
  {
    path: 'importar',
    component:SlidebarComponent,
    children: [
      { path: '', component: ImportarComponent },
    ]
  },
  {
    path: 'visualizar/:id',
    component:SlidebarComponent,
    children: [
      { path: '', component: VisualizarComponent },
    ]
  },

  // {path:'modulos'        ,component:PanelmodulosComponent},
  // {path:'graficas'       ,component:PanelgraficasComponent},
  // {path:'exportar'       ,component:ExportarComponent},
  // {path:'importar'       ,component:ImportarComponent},
  // {path:'visualizar/:id' ,component:VisualizarComponent},

  //! MODULOS
  {path:'admfin'         ,component:AdministracionFinanzasComponent },
  {path:'caez'           ,component:CaezComponent },
  {path:'comercial'      ,component:ComercialComponent },
  {path:'operaciones'    ,component:OperacionesComponent },
  {path:'jurnormativo'   ,component:JuridicoNormativoComponent},
  {path:'jurcorporativo' ,component:JuridicoCorporativoComponent },
  {path:'pp'             ,component:PpComponent},
  {path:'rrhh'           ,component:RrhhComponent},
  {path:'ti'             ,component:TiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

