import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdtDashboardComponent } from './adt-dashboard.component';

describe('AdtDashboardComponent', () => {
  let component: AdtDashboardComponent;
  let fixture: ComponentFixture<AdtDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdtDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
