import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVacantes2Component } from './tabla-vacantes2.component';

describe('TablaVacantes2Component', () => {
  let component: TablaVacantes2Component;
  let fixture: ComponentFixture<TablaVacantes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaVacantes2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaVacantes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
