import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsJnProcesoArmadoComponent } from './conadm-tabs-jn-proceso-armado.component';

describe('ConadmTabsJnProcesoArmadoComponent', () => {
  let component: ConadmTabsJnProcesoArmadoComponent;
  let fixture: ComponentFixture<ConadmTabsJnProcesoArmadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsJnProcesoArmadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsJnProcesoArmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
