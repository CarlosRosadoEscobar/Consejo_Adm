import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//TODO: RUTAS DE MODULOS
import { rutasPrincipales, rutasCompartidas } from './routes/rutas-globales';
import { rutasPruebas,graficas } from '../app/routes/rutas-pruebas';
import { consejoAdministracion } from './routes/rutasModulos/consejo-administracion';
import { atraccionTalento } from './routes/rutasModulos/atraccion-talento';
import { adminstrador } from './routes/rutasModulos/administrador';


const routes: Routes = [
  ...adminstrador,
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
