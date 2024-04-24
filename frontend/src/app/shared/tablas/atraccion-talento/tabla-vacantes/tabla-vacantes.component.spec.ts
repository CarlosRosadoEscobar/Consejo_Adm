import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVacantesComponent } from './tabla-vacantes.component';

describe('TablaVacantesComponent', () => {
  let component: TablaVacantesComponent;
  let fixture: ComponentFixture<TablaVacantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaVacantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaVacantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
