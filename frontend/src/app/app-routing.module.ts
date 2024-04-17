import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//TODO: RUTAS DE MODULOS
import { rutasPrincipales, rutasCompartidas } from './routes/rutas-globales';
import { rutasPruebas,graficas } from '../app/routes/rutas-pruebas';
import { consejoAdministracion } from './routes/rutasModulos/consejo-administracion';
import { atraccionTalento } from './routes/rutasModulos/atraccion-talento';

const routes: Routes = [
  ...consejoAdministracion,
  ...atraccionTalento,

  ...rutasPrincipales,
  ...rutasCompartidas,
  ...rutasPruebas,
  ...graficas,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
