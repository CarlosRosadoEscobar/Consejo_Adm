import { Component } from '@angular/core';
import { Documentos } from 'src/app/models/documentos';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-exportar',
  templateUrl: './exportar.component.html',
  styleUrls: ['./exportar.component.css']
})
export class ExportarComponent {
  listDocumentos: Documentos[] = [];
  subfilaVisible: { [key: number]: boolean } = {};
  isLoading: boolean = true; // Variable para indicar si la carga está en curso

  constructor(private _documentoService: PdfService) {}

  ngOnInit(): void { 
    this.obtenerDocumentos();

    let id =12;

    this._documentoService.obtenerDocumento(id).subscribe(
      (response) => {
        console.log('Raw Response:', response);
    
        try {
          // Attempt to parse the response as JSON
          const parsedResponse = JSON.parse(response);
    
          console.log('Parsed Response:', parsedResponse);
          // Handle the parsed response here
    
        } catch (parseError) {
          console.error('Error parsing JSON:', parseError);
          // Handle parsing error here
        }
      },
      (error) => {
        console.error('Error:', error);
        // Handle errors here
      }
    );
   


  }

  obtenerDocumentos() {
    this.isLoading = true; // Inicia el spinner
    this._documentoService.obtenerDocumentos().subscribe(data => {
      console.log(data);
      this.listDocumentos = data;
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.isLoading = false; 
    });
  }

  obtenerDocumento(id: number): void {
    if (this.subfilaVisible[id]) {
      this.subfilaVisible[id] = false;
    } else {
      Object.keys(this.subfilaVisible).forEach((key: string) => {
        this.subfilaVisible[+key] = false;
      });  
      this.subfilaVisible[id] = true;
    }
  }
}
