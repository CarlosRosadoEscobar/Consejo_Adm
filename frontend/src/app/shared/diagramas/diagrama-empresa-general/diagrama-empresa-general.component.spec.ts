import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramaEmpresaGeneralComponent } from './diagrama-empresa-general.component';

describe('DiagramaEmpresaGeneralComponent', () => {
  let component: DiagramaEmpresaGeneralComponent;
  let fixture: ComponentFixture<DiagramaEmpresaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagramaEmpresaGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagramaEmpresaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
