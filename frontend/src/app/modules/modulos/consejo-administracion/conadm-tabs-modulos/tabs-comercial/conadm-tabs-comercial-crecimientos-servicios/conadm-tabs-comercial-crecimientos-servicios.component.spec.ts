import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsComercialCrecimientosServiciosComponent } from './conadm-tabs-comercial-crecimientos-servicios.component';

describe('ConadmTabsComercialCrecimientosServiciosComponent', () => {
  let component: ConadmTabsComercialCrecimientosServiciosComponent;
  let fixture: ComponentFixture<ConadmTabsComercialCrecimientosServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsComercialCrecimientosServiciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsComercialCrecimientosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
