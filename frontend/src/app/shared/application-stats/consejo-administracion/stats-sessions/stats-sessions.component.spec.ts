import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsSessionsComponent } from './stats-sessions.component';

describe('StatsSessionsComponent', () => {
  let component: StatsSessionsComponent;
  let fixture: ComponentFixture<StatsSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsSessionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
