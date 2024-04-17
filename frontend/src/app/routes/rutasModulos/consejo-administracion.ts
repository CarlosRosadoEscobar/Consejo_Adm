import { Routes } from '@angular/router';
import { ConadmDashboardComponent } from "../../modules/modulos/consejo-administracion/conadm-dashboard/conadm-dashboard.component";
import { SliderbarComponent } from "../../shared/sliderbar/sliderbar.component";
import { ConadmModuloComercialComponent } from '../../modules/modulos/consejo-administracion/conadm-modulo-comercial/conadm-modulo-comercial.component';
import { ConadmModuloRHComponent } from '../../modules/modulos/consejo-administracion/conadm-modulo-rh/conadm-modulo-rh.component';
import { ConadmModuloJuridicoNormaticoComponent } from '../../modules/modulos/consejo-administracion/conadm-modulo-juridico-normatico/conadm-modulo-juridico-normatico.component';
import { ConadmModuloJuridicoCorporativoComponent } from '../../modules/modulos/consejo-administracion/conadm-modulo-juridico-corporativo/conadm-modulo-juridico-corporativo.component';
import { ConadmModuloTecnologiaInformacionComponent } from '../../modules/modulos/consejo-administracion/conadm-modulo-tecnologia-informacion/conadm-modulo-tecnologia-informacion.component';
import { ConadmModuloAdmintracionFinanzasComponent } from '../../modules/modulos/consejo-administracion/conadm-modulo-admintracion-finanzas/conadm-modulo-admintracion-finanzas.component';
import { ConadmModuloCaezComponent } from '../../modules/modulos/consejo-administracion/conadm-modulo-caez/conadm-modulo-caez.component';
import { ConadmOperacionesComponent } from '../../modules/modulos/consejo-administracion/conadm-operaciones/conadm-operaciones.component';
import { ConadmPPComponent } from '../../modules/modulos/consejo-administracion/conadm-pp/conadm-pp.component';
import { ConadmDocumentosComponent } from '../../modules/modulos/consejo-administracion/conadm-documentos/conadm-documentos.component';
import { ConadmUsuariosComponent } from '../../modules/modulos/consejo-administracion/conadm-usuarios/conadm-usuarios.component';
import { ConadmFirmaComponent } from '../../modules/modulos/consejo-administracion/conadm-firma/conadm-firma.component';

export const consejoAdministracion: Routes = [
    {
      path: 'inicio-consejo-administracion',
      component:SliderbarComponent,
      children: [
        { path: '', component: ConadmDashboardComponent },
      ]
    },
    {
      path: 'documentos',
      component:SliderbarComponent,
      children: [
        { path: '', component: ConadmDocumentosComponent },
      ]
    },
    {
      path: 'usuarios',
      component:SliderbarComponent,
      children: [
        { path: '', component: ConadmUsuariosComponent },
      ]
    },
    {
      path: 'firma',
      component:SliderbarComponent,
      children: [
        { path: '', component: ConadmFirmaComponent },
      ]
    },
    {
      path: 'modulo',
      component:SliderbarComponent,
      children: [
        { path: 'comercial', component: ConadmModuloComercialComponent },
        { path: 'recursos-humanos', component: ConadmModuloRHComponent },
        { path: 'jurídico-normativo', component: ConadmModuloJuridicoNormaticoComponent },
        { path: 'jurídico-corporativo', component: ConadmModuloJuridicoCorporativoComponent },
        { path: 'tecnologia-informacion', component: ConadmModuloTecnologiaInformacionComponent },
        { path: 'administración-finanzas', component: ConadmModuloAdmintracionFinanzasComponent },
        { path: 'caez', component: ConadmModuloCaezComponent },
        { path: 'operaciones', component: ConadmOperacionesComponent },
        { path: 'PP', component: ConadmPPComponent },
      ]
    },
  
];