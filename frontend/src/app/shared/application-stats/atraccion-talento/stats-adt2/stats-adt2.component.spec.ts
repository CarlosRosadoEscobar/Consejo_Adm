import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAdt2Component } from './stats-adt2.component';

describe('StatsAdt2Component', () => {
  let component: StatsAdt2Component;
  let fixture: ComponentFixture<StatsAdt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsAdt2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsAdt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
