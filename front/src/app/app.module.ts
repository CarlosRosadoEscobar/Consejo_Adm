import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Animaciones
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PanelmodulosComponent } from './components/panelmodulos/panelmodulos.component';

// services
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModulosComponent } from './components/modulos/modulos.component';
import { PaneldashboardComponent } from './components/paneldashboard/paneldashboard.component';
import { ComercialComponent } from './components/comercial/comercial.component';
import { RrhhComponent } from './components/rrhh/rrhh.component';
import { JuridicoCorporativoComponent } from './components/juridico-corporativo/juridico-corporativo.component';
import { TiComponent } from './components/ti/ti.component';
import { AdministracionFinanzasComponent } from './components/administracion-finanzas/administracion-finanzas.component';
import { CaezComponent } from './components/caez/caez.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { PpComponent } from './components/pp/pp.component';
import { JuridicoNormativoComponent } from './components/juridico-normativo/juridico-normativo.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MenuComponent,
    PanelmodulosComponent,
    ModulosComponent,
    PaneldashboardComponent,
    ComercialComponent,
    RrhhComponent,
    JuridicoCorporativoComponent,
    TiComponent,
    AdministracionFinanzasComponent,
    CaezComponent,
    OperacionesComponent,
    PpComponent,
    JuridicoNormativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
