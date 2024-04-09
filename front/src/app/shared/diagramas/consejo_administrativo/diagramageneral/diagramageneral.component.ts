import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGraphModule, Node, Edge, ClusterNode } from '@swimlane/ngx-graph';
import { Subject, Observable } from 'rxjs';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-diagramageneral',
  standalone: true,
  imports: [CommonModule, NgxGraphModule],
  templateUrl: './diagramageneral.component.html',
  styleUrls: ['./diagramageneral.component.css']
})
export class DiagramageneralComponent {

  view: [number, number] = [1250, 500];
  curve: any = shape.curveBasis;
  update$: Observable<boolean>;
  center$: Observable<boolean>;
  enableZoom = true; //para no hacer zoom
  draggingEnabled = false; //para no mover los nodos
  panningEnabled = true; //para no mover la pantalla
  animate = false;
  autoCenter = true;
  orientation = "TB";


  links: Edge[] = [
    //! Capa 1
    {
      id: 'comercial',
      source: 'centro',
      target: 'Comercial',
      label: 'area Comercial'
    },
    {
      id: 'rrhh',
      source: 'centro',
      target: 'RRHH',
      label: 'area RRHH'
    },
    {
      id: 'juridico_normativo',
      source: 'centro',
      target: 'JurídicoNormativo',
      label: 'area Jurídico Normativo'
    },
    {
      id: 'jurídico_corporativo',
      source: 'centro',
      target: 'JurídicoCorporativo',
      label: 'area Jurídico Corporativo'
    },
    {
      id: 'ti',
      source: 'centro',
      target: 'TI',
      label: 'area TI'
    },
    {
      id: 'administracion_finanzas',
      source: 'centro',
      target: 'AdministraciónFinanzas',
      label: 'area Administración Y Finanzas'
    },
    {
      id: 'caez',
      source: 'centro',
      target: 'CAEZ',
      label: 'area CAEZ'
    },
    {
      id: 'operaciones',
      source: 'centro',
      target: 'Operaciones',
      label: 'area Operaciones'
    },
    {
      id: 'pp',
      source: 'centro',
      target: 'PP',
      label: 'area PP'
    },

    //! Capa 2
    {
      id: 'gerente_comercial',
      source: 'Comercial',
      target: 'GerenteComercial',
      label: 'Gerente Comercial'
    },
    {
      id: 'gerente_rrhh',
      source: 'RRHH',
      target: 'GerenteRRHH',
      label: 'Gerente RRHH'
    },
    {
      id: 'gerente_juridico_normativo',
      source: 'JurídicoNormativo',
      target: 'GerenteJurídicoNormativo',
      label: 'Gerente Jurídico Normativo'
    },
    {
      id: 'gerente_juridico_corporativo',
      source: 'JurídicoCorporativo',
      target: 'GerenteJurídicoCorporativo',
      label: 'Gerente Jurídico Corporativo'
    },
    {
      id: 'gerente_ti',
      source: 'TI',
      target: 'GerenteTI',
      label: 'Gerente TI'
    },
    {
      id: 'gerente_administracion_finanzas',
      source: 'AdministraciónFinanzas',
      target: 'GerenteAdministraciónFinanzas',
      label: 'Gerente Administracion y Finanzas'
    },
    {
      id: 'gerente_caez',
      source: 'CAEZ',
      target: 'GerenteCAEZ',
      label: 'Gerente Administracion y Finanzas'
    },
    {
      id: 'gerente_operaciones',
      source: 'Operaciones',
      target: 'GerenteOperaciones',
      label: 'Gerente Operaciones'
    },
    {
      id: 'gerente_pp',
      source: 'PP',
      target: 'GerentePP',
      label: 'Gerente PP'
    },


  ];

  nodes: Node[] = [
    {
      id: 'centro',
      label: 'zascita',
      data: {
        title: 'Nombre de la empresa',
        // imageUrl: '../../../assets/images/logo.png'
      }
    },

    //! Primera Capa
    {
      id: 'Comercial',
      label: 'Comercial'
    },
    {
      id: 'RRHH',
      label: 'RRHH'
    },
    {
      id: 'JurídicoNormativo',
      label: 'Jurídico Normativo'
    },
    {
      id: 'JurídicoCorporativo',
      label: 'Jurídico Corporativo'
    },
    {
      id: 'TI',
      label: 'TI'
    },
    {
      id: 'AdministraciónFinanzas',
      label: 'Administración y finanzas'
    },
    {
      id: 'CAEZ',
      label: 'CAEZ'
    },
    {
      id: 'Operaciones',
      label: 'Operaciones'
    },
    {
      id: 'PP',
      label: 'PP'
    },


    //! Segunda Capa
    {
      id: 'GerenteComercial',
      label: 'Gerente Comercial'
    },
    {
      id: 'GerenteRRHH',
      label: 'Gerente RRHH'
    },
    {
      id: 'GerenteJurídicoNormativo',
      label: 'Gerente Jurídico Normativo'
    },
    {
      id: 'GerenteJurídicoCorporativo',
      label: 'Gerente Jurídico Corporativo'
    },
    {
      id: 'GerenteTI',
      label: 'Gerente TI'
    },
    {
      id: 'GerenteAdministraciónFinanzas',
      label: 'Gerente Administración y Finanzas'
    },
    {
      id: 'GerenteCAEZ',
      label: 'Gerente CAEZ'
    },
    {
      id: 'GerenteOperaciones',
      label: 'Gerente Operaciones'
    },
    {
      id: 'GerentePP',
      label: 'Gerente PP'
    },
  ];

  clusters: ClusterNode[] = [
    {
      id: 'third',
      label: 'Cluster node',
      childNodeIds: ['c1', 'c2']
    }
  ]

  constructor() {
    this.update$ = new Observable<boolean>(observer => {
      observer.next(true);
    });

    this.center$ = new Observable<boolean>(observer => {
      observer.next(true);
    });
  }

}



