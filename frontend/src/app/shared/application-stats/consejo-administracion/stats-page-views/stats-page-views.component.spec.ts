import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPageViewsComponent } from './stats-page-views.component';

describe('StatsPageViewsComponent', () => {
  let component: StatsPageViewsComponent;
  let fixture: ComponentFixture<StatsPageViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsPageViewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsPageViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
