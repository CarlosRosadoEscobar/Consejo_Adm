import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Documentos } from 'src/app/core/models/documentos';
import { PdfService } from 'src/app/data/services/pdf.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent {

  public set theme(theme: 'dark' | 'light') {
    // Store the theme in the local storage because it takes effect on reload only
    localStorage.setItem('ngx-extended-pdf-viewer.theme', theme);
    location.reload(); // Force reload
  }

  public get theme(): 'dark' | 'light' {
    const storedTheme = localStorage.getItem('ngx-extended-pdf-viewer.theme');
    return (storedTheme && (storedTheme === 'dark' || storedTheme === 'light')) ? storedTheme : 'light';
  }


  listDocumento : Documentos[] = [];

  constructor(private _documentoService: PdfService,private route: ActivatedRoute ){}

  ngOnInit():void{
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // Obtiene el parámetro 'id' de la URL
      if (id) {
        this.obtenerDocumento(id);
      }
    });
  }

  obtenerDocumento(id: any): void {
    this._documentoService.obtenerDocumento(id).subscribe(data => {
      this.listDocumento = data;

      return this.listDocumento;

    });
  }


}
