import { Component, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';
import { NgxExtendedPdfViewerComponent } from 'ngx-extended-pdf-viewer';
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

  @ViewChild('pdfViewer') pdfViewer!: NgxExtendedPdfViewerComponent;

  constructor(private _documentoService: PdfService) {
  }



  ngOnInit(): void { 
    this.obtenerDocumentos();
    let id =12;

    this._documentoService.obtenerDocumento(id).subscribe(
      (response) => {
        console.log('Raw Response:', response);
        try {
          const parsedResponse = JSON.parse(response);
          console.log('Parsed Response:', parsedResponse);
        } catch (parseError) {
          console.error('Error parsing JSON:', parseError);
        }
      },(error) => {
        console.error('Error:', error);
      }
    );
  }

  obtenerDocumentos() {
    this.isLoading = true; // Inicia el spinner
    this._documentoService.obtenerDocumentos().subscribe(data => {
      // console.log(data);
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
    }else{
      Object.keys(this.subfilaVisible).forEach((key: string) => {
        this.subfilaVisible[+key] = false;
      });
      this.subfilaVisible[id] = true;
    }
  }

 
  exportToBase64(): void {
    // Obtén la instancia de PDF.js desde el visor de PDF
    const pdfJsViewer = this.pdfViewer;
    console.log(pdfJsViewer);
    

    // Accede al objeto PDF.js
    // const pdfJs = pdfJsViewer.pdfViewer;

    // Accede al documento PDF
    // const pdfDocument = pdfJs.pdfDocument;

    // Obtén el contenido del PDF en base64
    // pdfDocument.getData().then((data: Uint8Array) => {
      // const binary = String.fromCharCode(...data);
      // const base64Data = btoa(binary);

      // console.log('PDF en base64:', base64Data);
      // Puedes realizar acciones adicionales con el PDF en base64
    // });
  }


}
