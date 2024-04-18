import { Component,ViewChild } from '@angular/core';
import { CargoService } from '../../../../data/dataCargo';
import { Estados } from '../../../../data/dataRegion';
import { Pregunta,PreguntasService } from '../../../../data/dataPreguntas';
import { RolesService } from '../../../../data/dataRol';

@Component({
  selector: 'app-admin-usuarios-registro',
  templateUrl: './admin-usuarios-registro.component.html',
  styleUrls: ['./admin-usuarios-registro.component.css']
})

export class AdminUsuariosRegistroComponent {
  areas: string[] = [];
  areaSeleccionada: string = '';
  puestos: any[] = [];
  puestoSeleccionado:string = '';
  
  estados: any[] = Estados.estados;
  estadoSeleccionado: string='';
  
  preguntaSeleccionada: number | null = null;
  preguntas: Pregunta[] = PreguntasService.preguntas;
  respuesta: string | null = null;
  @ViewChild('respuestaInput') respuestaInput: any;


  roles: any[] = RolesService.roles;
  rolSeleccionado: string = '';

  
  constructor(private cargoService: CargoService) {
    this.areas = Object.keys(this.cargoService.getCargosPorArea());
    console.log(this.roles);
    
  }
  
  cargarPuestos(): void {
    if (this.areaSeleccionada) {
      this.puestos = this.cargoService.getCargosPorArea()[this.areaSeleccionada];
      console.log(this.puestos);
    } else {
      this.puestos = [];
    }
  }
  
  resetRespuesta() {
    this.respuesta = null; // Reinicia la respuesta a null
    if (this.respuestaInput) {
      this.respuestaInput.nativeElement.value = ''; // Restablece el valor del input de respuesta
    }
  }
  
  mostrarInputRespuesta(): boolean {
    return this.preguntaSeleccionada !== null;
  }

}
