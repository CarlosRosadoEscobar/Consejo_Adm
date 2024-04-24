import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdtDocumentosComponent } from './adt-documentos.component';

describe('AdtDocumentosComponent', () => {
  let component: AdtDocumentosComponent;
  let fixture: ComponentFixture<AdtDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdtDocumentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdtDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
