import { Component, ViewChild, ElementRef, OnDestroy  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as pdfjs from 'pdfjs-dist';

@Component({
  selector: 'app-documentosinfirmar',
  standalone: true,
  imports: [],
  templateUrl: './documentosinfirmar.component.html',
  styleUrl: './documentosinfirmar.component.css'
})
export class DocumentosinfirmarComponent implements OnDestroy {

  @ViewChild('pdfViewer', {static: true}) pdfViewer!: ElementRef<HTMLCanvasElement>;
  pdfSrc = '../../../assets/documents/plan.pdf';

  constructor() {
    const pageReloaded = localStorage.getItem('pageReloaded');
    if (!pageReloaded) {
      localStorage.setItem('pageReloaded', 'true');
      window.location.reload();
    }
  }

  ngOnDestroy(): void {
    localStorage.removeItem('pageReloaded');
  }

  ngAfterViewInit(): void {
    this.showPdf();
  }

  showPdf(): void {
    const loadingTask = pdfjs.getDocument(this.pdfSrc);
    loadingTask.promise.then(pdf => {
      pdf.getPage(1).then(page => {
        const scale = 1;
        const viewport = page.getViewport({ scale });

        const canvas = this.pdfViewer.nativeElement;
        const context = canvas.getContext('2d');

        if (context) { // Verificar si context no es nulo
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          page.render(renderContext);
        } else {
          console.error("Error: Canvas context is null");
        }
      });
    });
  }

}
