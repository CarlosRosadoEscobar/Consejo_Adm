import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//? Components
import { SliderbarComponent } from './shared/sliderbar/sliderbar.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { VerificacionComponent } from './modules/auth/verificacion/verificacion.component';
import { GraficasUsuariosComponent } from './shared/graficas/consejo-administracion/graficas-usuarios/graficas-usuarios.component';
import { GraficasReportesComponent } from './shared/graficas/consejo-administracion/graficas-reportes/graficas-reportes.component';
import { GraficasDocumentosComponent } from './shared/graficas/consejo-administracion/graficas-documentos/graficas-documentos.component';
import { GraficasVentasComponent } from './shared/graficas/consejo-administracion/graficas-ventas/graficas-ventas.component';
import { AdminFormularioComponent } from './modules/modulos/administrador/admin-formulario/admin-formulario.component';
import { ConadmDashboardComponent } from './modules/modulos/consejo-administracion/conadm-dashboard/conadm-dashboard.component';
import { ConadmModulosComponent } from './modules/modulos/consejo-administracion/conadm-modulos/conadm-modulos.component';
import { ConadmDocumentosComponent } from './modules/modulos/consejo-administracion/conadm-documentos/conadm-documentos.component';
import { MiPerfilComponent } from './shared/perfil/mi-perfil/mi-perfil.component';
import { MiPerfilConfiguracionComponent } from './shared/perfil/mi-perfil-configuracion/mi-perfil-configuracion.component';
import { StatsUsersComponent } from './shared/application-stats/consejo-administracion/stats-users/stats-users.component';
import { StatsSessionsComponent } from './shared/application-stats/consejo-administracion/stats-sessions/stats-sessions.component';
import { StatsPageViewsComponent } from './shared/application-stats/consejo-administracion/stats-page-views/stats-page-views.component';
import { StatsAvgComponent } from './shared/application-stats/consejo-administracion/stats-avg/stats-avg.component';
import { TablaDashboardComponent } from './shared/tablas/consejo-administracion/tabla-dashboard/tabla-dashboard.component';
import { ConadmModuloComercialComponent } from './modules/modulos/consejo-administracion/conadm-modulo-comercial/conadm-modulo-comercial.component';
import { ConadmModuloRHComponent } from './modules/modulos/consejo-administracion/conadm-modulo-rh/conadm-modulo-rh.component';
import { ConadmModuloJuridicoNormaticoComponent } from './modules/modulos/consejo-administracion/conadm-modulo-juridico-normatico/conadm-modulo-juridico-normatico.component';
import { ConadmModuloJuridicoCorporativoComponent } from './modules/modulos/consejo-administracion/conadm-modulo-juridico-corporativo/conadm-modulo-juridico-corporativo.component';
import { ConadmModuloTecnologiaInformacionComponent } from './modules/modulos/consejo-administracion/conadm-modulo-tecnologia-informacion/conadm-modulo-tecnologia-informacion.component';
import { ConadmModuloAdmintracionFinanzasComponent } from './modules/modulos/consejo-administracion/conadm-modulo-admintracion-finanzas/conadm-modulo-admintracion-finanzas.component';
import { ConadmModuloCaezComponent } from './modules/modulos/consejo-administracion/conadm-modulo-caez/conadm-modulo-caez.component';
import { ConadmOperacionesComponent } from './modules/modulos/consejo-administracion/conadm-operaciones/conadm-operaciones.component';
import { ConadmPPComponent } from './modules/modulos/consejo-administracion/conadm-pp/conadm-pp.component';
import { ConadmUsuariosComponent } from './modules/modulos/consejo-administracion/conadm-usuarios/conadm-usuarios.component';
import { ConadmFirmaComponent } from './modules/modulos/consejo-administracion/conadm-firma/conadm-firma.component';
import { ConadmTabsRhVacantesComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-rh/conadm-tabs-rh-vacantes/conadm-tabs-rh-vacantes.component';
import { ConadmTabsRhRotacionComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-rh/conadm-tabs-rh-rotacion/conadm-tabs-rh-rotacion.component';
import { ConadmTabsRhRegionComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-rh/conadm-tabs-rh-region/conadm-tabs-rh-region.component';
import { ConadmTabsRhPlantillaAutorizadaComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-rh/conadm-tabs-rh-plantilla-autorizada/conadm-tabs-rh-plantilla-autorizada.component';
import { ConadmTabsJnProcesoArmadoComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-juridico-normativo/conadm-tabs-jn-proceso-armado/conadm-tabs-jn-proceso-armado.component';
import { ConadmTabsJnInventarioArmamentoComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-juridico-normativo/conadm-tabs-jn-inventario-armamento/conadm-tabs-jn-inventario-armamento.component';
import { ConadmTabsJcContratosComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-juridico-corporativo/conadm-tabs-jc-contratos/conadm-tabs-jc-contratos.component';
import { ConadmTabsTiGastoComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-ti/conadm-tabs-ti-gasto/conadm-tabs-ti-gasto.component';
import { ConadmTabsTiInventarioDispositivosComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-ti/conadm-tabs-ti-inventario-dispositivos/conadm-tabs-ti-inventario-dispositivos.component';
import { ConadmTabsAfRecursosMaterialesComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-administracion-finanzas/conadm-tabs-af-recursos-materiales/conadm-tabs-af-recursos-materiales.component';
import { ConadmTabsAfFacturacionComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-administracion-finanzas/conadm-tabs-af-facturacion/conadm-tabs-af-facturacion.component';
import { ConadmTabsAfNominaComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-administracion-finanzas/conadm-tabs-af-nomina/conadm-tabs-af-nomina.component';
import { ConadmTabsAfNotaCreditoComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-administracion-finanzas/conadm-tabs-af-nota-credito/conadm-tabs-af-nota-credito.component';
import { ConadmTabsAfProyeccionComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-administracion-finanzas/conadm-tabs-af-proyeccion/conadm-tabs-af-proyeccion.component';
import { ConadmTabsCaezEmergenciasComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-caez/conadm-tabs-caez-emergencias/conadm-tabs-caez-emergencias.component';
import { ConadmTabsOperacionesCoberturaComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-operaciones/conadm-tabs-operaciones-cobertura/conadm-tabs-operaciones-cobertura.component';
import { ConadmTabsOperacionesEstadoFuerzaComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-operaciones/conadm-tabs-operaciones-estado-fuerza/conadm-tabs-operaciones-estado-fuerza.component';
import { ConadmTabsPpVentaComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-pp/conadm-tabs-pp-venta/conadm-tabs-pp-venta.component';
import { ConadmTabsPpProcesoArmadoComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-pp/conadm-tabs-pp-proceso-armado/conadm-tabs-pp-proceso-armado.component';
import { ConadmTabsPpProspectosComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-pp/conadm-tabs-pp-prospectos/conadm-tabs-pp-prospectos.component';
import { ConadmTabsPpPlantillaComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-pp/conadm-tabs-pp-plantilla/conadm-tabs-pp-plantilla.component';
import { ConadmTabsComercialCrecimientosServiciosComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-comercial/conadm-tabs-comercial-crecimientos-servicios/conadm-tabs-comercial-crecimientos-servicios.component';
import { ConadmTabsComercialCrecimientosVentasComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-comercial/conadm-tabs-comercial-crecimientos-ventas/conadm-tabs-comercial-crecimientos-ventas.component';
import { ConadmTabsComercialSeguimientosProspectosComponent } from './modules/modulos/consejo-administracion/conadm-tabs-modulos/tabs-comercial/conadm-tabs-comercial-seguimientos-prospectos/conadm-tabs-comercial-seguimientos-prospectos.component';
import { AcercardeComponent } from './shared/perfil/acercarde/acercarde.component';
import { AdtDashboardComponent } from './modules/modulos/atraccion-talento/adt-dashboard/adt-dashboard.component';
import { AdtBitacoraComponent } from './modules/modulos/atraccion-talento/adt-bitacora/adt-bitacora.component';
import { AdtRequerimientoComponent } from './modules/modulos/atraccion-talento/adt-requerimiento/adt-requerimiento.component';
import { AdminDashboardComponent } from './modules/modulos/administrador/admin-dashboard/admin-dashboard.component';
import { AdminModulosComponent } from './modules/modulos/administrador/admin-modulos/admin-modulos.component';
import { AdminUsuariosRegistroComponent } from './modules/modulos/administrador/admin-usuarios-registro/admin-usuarios-registro.component';
import { AdminUsuariosActualizarComponent } from './modules/modulos/administrador/admin-usuarios-actualizar/admin-usuarios-actualizar.component';
import { AdminUsuariosListaComponent } from './modules/modulos/administrador/admin-usuarios-lista/admin-usuarios-lista.component';
import { StatsAdt1Component } from './shared/application-stats/atraccion-talento/stats-adt1/stats-adt1.component';
import { StatsAdt2Component } from './shared/application-stats/atraccion-talento/stats-adt2/stats-adt2.component';
import { StatsAdt3Component } from './shared/application-stats/atraccion-talento/stats-adt3/stats-adt3.component';
import { StatsAdt4Component } from './shared/application-stats/atraccion-talento/stats-adt4/stats-adt4.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderbarComponent,
    LoginComponent,
    VerificacionComponent,
    GraficasUsuariosComponent,
    GraficasReportesComponent,
    GraficasDocumentosComponent,
    GraficasVentasComponent,
    AdminFormularioComponent,
    ConadmDashboardComponent,
    ConadmModulosComponent,
    ConadmDocumentosComponent,
    MiPerfilComponent,
    MiPerfilConfiguracionComponent,
    StatsUsersComponent,
    StatsSessionsComponent,
    StatsPageViewsComponent,
    StatsAvgComponent,
    TablaDashboardComponent,
    ConadmModuloComercialComponent,
    ConadmModuloRHComponent,
    ConadmModuloJuridicoNormaticoComponent,
    ConadmModuloJuridicoCorporativoComponent,
    ConadmModuloTecnologiaInformacionComponent,
    ConadmModuloAdmintracionFinanzasComponent,
    ConadmModuloCaezComponent,
    ConadmOperacionesComponent,
    ConadmPPComponent,
    ConadmUsuariosComponent,
    ConadmFirmaComponent,
    ConadmTabsRhVacantesComponent,
    ConadmTabsRhRotacionComponent,
    ConadmTabsRhRegionComponent,
    ConadmTabsRhPlantillaAutorizadaComponent,
    ConadmTabsJnProcesoArmadoComponent,
    ConadmTabsJnInventarioArmamentoComponent,
    ConadmTabsJcContratosComponent,
    ConadmTabsTiGastoComponent,
    ConadmTabsTiInventarioDispositivosComponent,
    ConadmTabsAfRecursosMaterialesComponent,
    ConadmTabsAfFacturacionComponent,
    ConadmTabsAfNominaComponent,
    ConadmTabsAfNotaCreditoComponent,
    ConadmTabsAfProyeccionComponent,
    ConadmTabsCaezEmergenciasComponent,
    ConadmTabsOperacionesCoberturaComponent,
    ConadmTabsOperacionesEstadoFuerzaComponent,
    ConadmTabsPpVentaComponent,
    ConadmTabsPpProcesoArmadoComponent,
    ConadmTabsPpProspectosComponent,
    ConadmTabsPpPlantillaComponent,
    ConadmTabsComercialCrecimientosServiciosComponent,
    ConadmTabsComercialCrecimientosVentasComponent,
    ConadmTabsComercialSeguimientosProspectosComponent,
    AcercardeComponent,
    AdtDashboardComponent,
    AdtBitacoraComponent,
    AdtRequerimientoComponent,
    AdminDashboardComponent,
    AdminModulosComponent,
    AdminUsuariosRegistroComponent,
    AdminUsuariosActualizarComponent,
    AdminUsuariosListaComponent,
    StatsAdt1Component,
    StatsAdt2Component,
    StatsAdt3Component,
    StatsAdt4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
