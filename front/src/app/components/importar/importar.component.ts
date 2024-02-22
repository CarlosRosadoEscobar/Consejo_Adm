import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Documentos } from 'src/app/models/documentos';

@Component({
  selector: 'app-importar',
  templateUrl: './importar.component.html',
  styleUrls: ['./importar.component.css']  // Cambiado a styleUrls
})
export class ImportarComponent {

  documentoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.documentoForm = this.fb.group({
      documento: ['', Validators.required]
    });
  }

  guardarDocumento() {
    const fileInput = this.documentoForm.get('documento')?.value;
    if (fileInput) {
      const file: File = fileInput.files[0];
      const myReader: FileReader = new FileReader();
      myReader.onloadend = (e) => {
        const base64Image: string | ArrayBuffer | null = myReader.result;
        console.log(base64Image);
      };
      myReader.readAsDataURL(file);
    } else {
      console.error('No file selected');
    }
  }
}
