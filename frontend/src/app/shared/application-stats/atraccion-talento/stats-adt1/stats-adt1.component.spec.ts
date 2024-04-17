import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAdt1Component } from './stats-adt1.component';

describe('StatsAdt1Component', () => {
  let component: StatsAdt1Component;
  let fixture: ComponentFixture<StatsAdt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsAdt1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsAdt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
