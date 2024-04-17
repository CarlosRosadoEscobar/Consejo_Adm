import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsJnInventarioArmamentoComponent } from './conadm-tabs-jn-inventario-armamento.component';

describe('ConadmTabsJnInventarioArmamentoComponent', () => {
  let component: ConadmTabsJnInventarioArmamentoComponent;
  let fixture: ComponentFixture<ConadmTabsJnInventarioArmamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsJnInventarioArmamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsJnInventarioArmamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
