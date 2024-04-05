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

  links: Edge[] = [
    {
      id: 'Comercial',
      source: 'centro',
      target: 'Comercial',
      label: 'area Comercial'
    },
    {
      id: 'RRHH',
      source: 'centro',
      target: 'RRHH',
      label: 'area RRHH'
    },
    {
      id: 'JurídicoNormativo',
      source: 'centro',
      target: 'JurídicoNormativo',
      label: 'area Jurídico Normativo'
    },
    {
      id: 'JurídicoCorporativo',
      source: 'centro',
      target: 'JurídicoCorporativo',
      label: 'area Jurídico Corporativo'
    },
    {
      id: 'TI',
      source: 'centro',
      target: 'TI',
      label: 'area TI'
    },
    {
      id: 'AdministraciónFinanzas',
      source: 'centro',
      target: 'AdministraciónFinanzas',
      label: 'area Administración Y Finanzas'
    },
    {
      id: 'CAEZ',
      source: 'centro',
      target: 'CAEZ',
      label: 'area CAEZ'
    },
    {
      id: 'Operaciones',
      source: 'centro',
      target: 'Operaciones',
      label: 'area Operaciones'
    },
    {
      id: 'PP',
      source: 'centro',
      target: 'PP',
      label: 'area PP'
    }

  ];

  nodes: Node[] = [
    {
      id: 'centro',
      label: 'zascita'
    },
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



