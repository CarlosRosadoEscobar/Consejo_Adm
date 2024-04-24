import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasVacantesComponent } from './graficas-vacantes.component';

describe('GraficasVacantesComponent', () => {
  let component: GraficasVacantesComponent;
  let fixture: ComponentFixture<GraficasVacantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficasVacantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficasVacantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
