import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosfirmadosComponent } from './documentosfirmados.component';

describe('DocumentosfirmadosComponent', () => {
  let component: DocumentosfirmadosComponent;
  let fixture: ComponentFixture<DocumentosfirmadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentosfirmadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentosfirmadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
