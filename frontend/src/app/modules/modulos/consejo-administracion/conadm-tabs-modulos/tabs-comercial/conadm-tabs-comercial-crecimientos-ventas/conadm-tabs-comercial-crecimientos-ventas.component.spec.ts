import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsComercialCrecimientosVentasComponent } from './conadm-tabs-comercial-crecimientos-ventas.component';

describe('ConadmTabsComercialCrecimientosVentasComponent', () => {
  let component: ConadmTabsComercialCrecimientosVentasComponent;
  let fixture: ComponentFixture<ConadmTabsComercialCrecimientosVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsComercialCrecimientosVentasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsComercialCrecimientosVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
