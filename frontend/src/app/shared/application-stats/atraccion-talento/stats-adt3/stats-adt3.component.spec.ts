import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAdt3Component } from './stats-adt3.component';

describe('StatsAdt3Component', () => {
  let component: StatsAdt3Component;
  let fixture: ComponentFixture<StatsAdt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsAdt3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsAdt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
