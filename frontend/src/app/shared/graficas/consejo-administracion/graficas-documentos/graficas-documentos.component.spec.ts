import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasDocumentosComponent } from './graficas-documentos.component';

describe('GraficasDocumentosComponent', () => {
  let component: GraficasDocumentosComponent;
  let fixture: ComponentFixture<GraficasDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficasDocumentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficasDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
