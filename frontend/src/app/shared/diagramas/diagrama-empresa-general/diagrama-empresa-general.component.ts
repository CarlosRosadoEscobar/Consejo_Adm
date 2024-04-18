import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Nodo } from '../../../core/interfaces/diagramaGeneral';
import * as go from 'gojs';

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
              margin: 10, 
              textAlign: 'center',
              font:'500 0.875rem Inter, sans-serif',
              stroke:'black',
              background: 'white',
              width: 150 
            }, 
            new go.Binding('text', '', function(data) {
              return data.nombre;
            })
          ),
          $(go.TextBlock, 
            { 
              margin: 5, 
              textAlign: 'center',
              font:'0.875rem Inter, sans-serif',
              stroke:'red',
              background: 'lightgray',
              width: 150 
            }, 
            new go.Binding('text', '', function(data) {
              return data.puesto;
            })
          ),
          $(go.TextBlock, 
            { 
              margin: 5, 
              textAlign: 'center',
              font:'0.875rem Inter, sans-serif',
              stroke:'red',
              background: 'lightgray',
              width: 150 
            }, 
            new go.Binding('text', '', function(data) {
              return data.area;
            })
          )
        )
      )
    );
    


  

    const datosNodo: Nodo[] = [
      { 
        key: '1', 
        nombre: 'Edgar Angel gonzalez', 
        puesto: 'Analista Programador',
        area: 'Tecnologias de la información', 
        foto: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png', 
        telefono: '1234567890', 
        correo: 'juan@example.com', 
      },

    ];

    diagram.model = new go.TreeModel(datosNodo);
  }


}

/* 

ya esta ,
pues no todo los estilos me agarraron:

    diagram.nodeTemplate =
    $(go.Node, 'Auto',
      $(go.Shape, 'RoundedRectangle', { width: 300, height: 130, fill:'white' }), 
      $(go.Panel, 'Horizontal',
        { margin: 5 },

        $(go.Picture, { width: 100, height: 100, margin: 5 }, new go.Binding('source', 'foto')),
        
        $(go.Panel, 'Vertical',
          { alignment: go.Spot.Left, alignmentFocus: go.Spot.Left },
          $(go.TextBlock, 
            { 
              margin: 5, 
              textAlign: 'center',
              font:'0.875rem Inter, sans-serif',
              stroke:'red',
              background: 'lightgray',
              width: 150 
            }, 
            new go.Binding('text', '', function(data) {
            return data.nombre + '\n' +
                   data.puesto+ '\n' +
                   data.area ;
          }))
        )
      )
    );


    pero esos si


    y ahora lo que quiero poner el formato pero a cada uno de las new go.Binding('text', '', function(data)
*/