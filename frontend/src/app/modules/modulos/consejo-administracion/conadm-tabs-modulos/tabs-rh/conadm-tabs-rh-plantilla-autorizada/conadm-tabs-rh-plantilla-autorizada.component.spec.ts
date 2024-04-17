import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsRhPlantillaAutorizadaComponent } from './conadm-tabs-rh-plantilla-autorizada.component';

describe('ConadmTabsRhPlantillaAutorizadaComponent', () => {
  let component: ConadmTabsRhPlantillaAutorizadaComponent;
  let fixture: ComponentFixture<ConadmTabsRhPlantillaAutorizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsRhPlantillaAutorizadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsRhPlantillaAutorizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
