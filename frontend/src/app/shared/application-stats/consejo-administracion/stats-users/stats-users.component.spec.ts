import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsUsersComponent } from './stats-users.component';

describe('StatsUsersComponent', () => {
  let component: StatsUsersComponent;
  let fixture: ComponentFixture<StatsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
