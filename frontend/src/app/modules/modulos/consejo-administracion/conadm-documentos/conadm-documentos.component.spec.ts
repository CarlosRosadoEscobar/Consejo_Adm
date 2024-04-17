import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmDocumentosComponent } from './conadm-documentos.component';

describe('ConadmDocumentosComponent', () => {
  let component: ConadmDocumentosComponent;
  let fixture: ComponentFixture<ConadmDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmDocumentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
