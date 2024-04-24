import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Nodo } from '../../../core/interfaces/diagramaGeneral';
import * as go from 'gojs';

export interface Enlace {
  from: string;
  to: string;
}


@Component({
  selector: 'app-diagrama-empresa-general',
  templateUrl: './diagrama-empresa-general.component.html',
  styleUrl: './diagrama-empresa-general.component.css',
})
export class DiagramaEmpresaGeneralComponent implements AfterViewInit {

  @ViewChild('diagramDiv') diagramDiv!: ElementRef;
  
  ngAfterViewInit() {
    const $ = go.GraphObject.make;

    const diagram = $(go.Diagram, this.diagramDiv.nativeElement, {
      'undoManager.isEnabled': true,
      'allowCopy': false,
      'allowDelete': false,
      'commandHandler.deletesTree': false
    });

    diagram.nodeTemplate =
    $(go.Node, 'Auto',
      $(go.Shape, 'RoundedRectangle', { width: 300, height: 130, fill:'#111827' }), 
      $(go.Panel, 'Horizontal',
        { margin: 5 },
        $(go.Picture, { width: 100, height: 100, margin: 5 }, new go.Binding('source', 'foto')),
        $(go.Panel, 'Vertical',
          { alignment: go.Spot.Left, alignmentFocus: go.Spot.Left },
          $(go.TextBlock, 
            { 
              margin: 15, 
              textAlign: 'center',
              stroke:'#f9fafb',
              width: 150,
              font: "bold 15pt Inter, sans-serif"
            }, 
            new go.Binding('text', '', function(data) {
              return data.nombre;
            })
          ),
          $(go.TextBlock, 
            { 
              textAlign: 'center',
              font:'0.875rem Inter, sans-serif',
              stroke:'#f9fafb',
              background:'green',
              width: 150 
            }, 
            new go.Binding('text', '', function(data) {
              return data.area;
            })
          ),
          $(go.TextBlock, 
            { 
              margin: 10, 
              textAlign: 'center',
              font:'0.875rem Inter, sans-serif',
              stroke:'#f9fafb',
              width: 150 
            }, 
            new go.Binding('text', '', function(data) {
              return data.puesto;
            })
          ),
        )
      )
    );

    diagram.linkTemplate =
    $(go.Link, { routing: go.Routing.AvoidsNodes,
      corner: 10 },
      $(go.Shape, { toArrow: "Standard", fill:'#6b7280'})
    );
    
    const nodeDataArray: Nodo[] = [
      { 
        key: '1', 
        nombre: 'Carlos Rozado', 
        puesto: 'Gerente de Ti',
        area: 'Tecnologias Infomacion', 
        foto: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png', 
        telefono: '1234567890', 
        correo: 'carlos@example.com', 
      },
      { 
        key: '2', 
        nombre: 'Angel Gonzalez', 
        puesto: 'Analista Programador',
        area: 'Tecnologias Infomacion', 
        foto: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png', 
        telefono: '1234567890', 
        correo: 'carlos@example.com', 
      },
      { 
        key: '3', 
        nombre: 'Alexis Morales', 
        puesto: 'Programador web',
        area: 'Tecnologias Infomacion', 
        foto: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png', 
        telefono: '1234567890', 
        correo: 'carlos@example.com', 
      },
      { 
        key: '4', 
        nombre: 'Donovan Peez', 
        puesto: 'Soporte Tecnico',
        area: 'Tecnologias Infomacion', 
        foto: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png', 
        telefono: '1234567890', 
        correo: 'carlos@example.com', 
      },
      { 
        key: '5', 
        nombre: 'Haziel Trejo', 
        puesto: 'Auxiliar Soporte Tecnico',
        area: 'Tecnologias Infomacion', 
        foto: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png', 
        telefono: '1234567890', 
        correo: 'carlos@example.com', 
      },
    ];

    const linkDataArray: Enlace[] = [ 
      { from: '1', to: '2' },
      { from: '1', to: '3' },
      { from: '1', to: '4' },
      { from: '1', to: '5' },


      { from: '3', to: '2' },
      { from: '4', to: '5' },

    ];

    diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
  }
  


}

/* 
  ahora lo que quiero hacer es poder darle diseño a los links,




*/


/* 


      //   $(go.Panel, 'Spot', { width: 100, height: 100, margin: 5 },
      //   $(go.Shape, 'Circle', { width: 100, height: 100, strokeWidth: 0, fill: 'red' }), // Fondo circular
      //   $(go.Panel, 'Spot', { isClipping: true },
      //     $(go.Shape, 'Circle', { width: 90, height: 90, strokeWidth: 0 }), // Máscara de recorte circular
      //     $(go.Picture, { width: 80, height: 80 }, new go.Binding('source', 'foto')) // Imagen
      //   )
      // ),*/
