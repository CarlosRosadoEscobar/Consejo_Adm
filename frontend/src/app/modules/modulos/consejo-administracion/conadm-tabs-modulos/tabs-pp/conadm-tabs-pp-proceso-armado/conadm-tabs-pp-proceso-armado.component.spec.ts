import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsPpProcesoArmadoComponent } from './conadm-tabs-pp-proceso-armado.component';

describe('ConadmTabsPpProcesoArmadoComponent', () => {
  let component: ConadmTabsPpProcesoArmadoComponent;
  let fixture: ComponentFixture<ConadmTabsPpProcesoArmadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsPpProcesoArmadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsPpProcesoArmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
