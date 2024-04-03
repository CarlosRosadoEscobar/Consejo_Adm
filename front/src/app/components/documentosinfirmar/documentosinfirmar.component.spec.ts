import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosinfirmarComponent } from './documentosinfirmar.component';

describe('DocumentosinfirmarComponent', () => {
  let component: DocumentosinfirmarComponent;
  let fixture: ComponentFixture<DocumentosinfirmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentosinfirmarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentosinfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
