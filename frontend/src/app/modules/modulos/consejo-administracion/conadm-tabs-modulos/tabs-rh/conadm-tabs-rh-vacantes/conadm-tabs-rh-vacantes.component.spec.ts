import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsRhVacantesComponent } from './conadm-tabs-rh-vacantes.component';

describe('ConadmTabsRhVacantesComponent', () => {
  let component: ConadmTabsRhVacantesComponent;
  let fixture: ComponentFixture<ConadmTabsRhVacantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsRhVacantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsRhVacantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
