import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmDashboardComponent } from './conadm-dashboard.component';

describe('ConadmDashboardComponent', () => {
  let component: ConadmDashboardComponent;
  let fixture: ComponentFixture<ConadmDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
