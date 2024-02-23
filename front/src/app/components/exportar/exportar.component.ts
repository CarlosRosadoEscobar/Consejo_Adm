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
