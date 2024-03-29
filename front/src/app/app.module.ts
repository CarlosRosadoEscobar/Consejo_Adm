import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//! Animaciones
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule }from '@swimlane/ngx-charts';  // graficas
import { ToastrModule } from 'ngx-toastr';
import { PanelmodulosComponent } from './components/panelmodulos/panelmodulos.component';
import { NgApexchartsModule } from 'ng-apexcharts'
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


//! services
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { PanelgraficasComponent } from './components/panelgraficas/panelgraficas.component';
import { ExportarComponent } from './components/exportar/exportar.component';
import { ImportarComponent } from './components/importar/importar.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PanelmodulosComponent,
    PaneldashboardComponent,
    ComercialComponent,
    RrhhComponent,
    JuridicoCorporativoComponent,
    TiComponent,
    AdministracionFinanzasComponent,
    CaezComponent,
    OperacionesComponent,
    PpComponent,
    JuridicoNormativoComponent,
    PanelgraficasComponent,
    ExportarComponent,
    ImportarComponent,
    VisualizarComponent,
    SlidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgxChartsModule,
    NgxExtendedPdfViewerModule,
    FormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
