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
import { authGuard } from './guards/auth.guard'; // Importa tu guardia de rutas


const routes: Routes = [
  //! VERIFICACION
  {path:''               ,component:LoginComponent},
  {path:'login'          ,component:LoginComponent},
  {path:'verificacion'   ,component:MfaComponent,canActivate: [authGuard]},

  //! PANELES
  {
    path: 'inicio',
    component:SlidebarComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: PaneldashboardComponent },
    ]
  },
  {
    path: 'modulos',
    component:SlidebarComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: PanelmodulosComponent },
    ]
  },
  {
    path: 'graficas',
    component:SlidebarComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: PanelgraficasComponent },
    ]
  },
  {
    path: 'exportar',
    component:SlidebarComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: ExportarComponent },
    ]
  },
  {
    path: 'importar',
    component:SlidebarComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: ImportarComponent },
    ]
  },
  {
    path: 'visualizar/:id',
    component:SlidebarComponent,
    canActivate: [authGuard],
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
  {
    path: 'modulos',
    component:SlidebarComponent,
    children: [
      { path: 'admfin', component: AdministracionFinanzasComponent },
    ]
  },
  {
    path: 'modulos',
    component:SlidebarComponent,
    children: [
      { path: 'caez', component: CaezComponent },
    ]
  },
  {
    path: 'modulos',
    component:SlidebarComponent,
    children: [
      { path: 'comercial', component: ComercialComponent },
    ]
  },
  {
    path: 'modulos',
    component:SlidebarComponent,
    children: [
      { path: 'operaciones', component: OperacionesComponent },
    ]
  },
  {
    path: 'modulos',
    component:SlidebarComponent,
    children: [
      { path: 'jurnormativo', component: JuridicoNormativoComponent },
    ]
  },
  {
    path: 'modulos',
    component:SlidebarComponent,
    children: [
      { path: 'jurcorporativo', component: JuridicoCorporativoComponent },
    ]
  },
  {
    path: 'modulos',
    component:SlidebarComponent,
    children: [
      { path: 'pp', component: PpComponent },
    ]
  },
  {
    path: 'modulos',
    component:SlidebarComponent,
    children: [
      { path: 'rrhh', component: RrhhComponent },
    ]
  },
  {
    path: 'modulos',
    component:SlidebarComponent,
    children: [
      { path: 'ti', component: TiComponent },
    ]
  },

  // {path:'admfin'         ,component:AdministracionFinanzasComponent },
  // {path:'caez'           ,component:CaezComponent },
  // {path:'comercial'      ,component:ComercialComponent },
  // {path:'operaciones'    ,component:OperacionesComponent },
  // {path:'jurnormativo'   ,component:JuridicoNormativoComponent},
  // {path:'jurcorporativo' ,component:JuridicoCorporativoComponent },
  // {path:'pp'             ,component:PpComponent},
  // {path:'rrhh'           ,component:RrhhComponent},
  // {path:'ti'             ,component:TiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

