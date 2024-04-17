import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAvgComponent } from './stats-avg.component';

describe('StatsAvgComponent', () => {
  let component: StatsAvgComponent;
  let fixture: ComponentFixture<StatsAvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsAvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsAvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
