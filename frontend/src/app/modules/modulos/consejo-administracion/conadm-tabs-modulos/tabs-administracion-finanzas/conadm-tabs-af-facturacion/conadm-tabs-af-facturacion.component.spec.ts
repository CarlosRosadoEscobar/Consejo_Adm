import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsAfFacturacionComponent } from './conadm-tabs-af-facturacion.component';

describe('ConadmTabsAfFacturacionComponent', () => {
  let component: ConadmTabsAfFacturacionComponent;
  let fixture: ComponentFixture<ConadmTabsAfFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsAfFacturacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsAfFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
