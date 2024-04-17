import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasVentasComponent } from './graficas-ventas.component';

describe('GraficasVentasComponent', () => {
  let component: GraficasVentasComponent;
  let fixture: ComponentFixture<GraficasVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficasVentasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficasVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
