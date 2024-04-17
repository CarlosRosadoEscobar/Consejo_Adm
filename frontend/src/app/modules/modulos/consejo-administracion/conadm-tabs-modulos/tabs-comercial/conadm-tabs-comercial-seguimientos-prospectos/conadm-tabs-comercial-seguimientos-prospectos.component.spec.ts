import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsComercialSeguimientosProspectosComponent } from './conadm-tabs-comercial-seguimientos-prospectos.component';

describe('ConadmTabsComercialSeguimientosProspectosComponent', () => {
  let component: ConadmTabsComercialSeguimientosProspectosComponent;
  let fixture: ComponentFixture<ConadmTabsComercialSeguimientosProspectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsComercialSeguimientosProspectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsComercialSeguimientosProspectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
