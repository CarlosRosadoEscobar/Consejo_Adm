import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAdt4Component } from './stats-adt4.component';

describe('StatsAdt4Component', () => {
  let component: StatsAdt4Component;
  let fixture: ComponentFixture<StatsAdt4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsAdt4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsAdt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
