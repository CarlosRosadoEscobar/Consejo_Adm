import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneldashboardComponent } from './paneldashboard.component';

describe('PaneldashboardComponent', () => {
  let component: PaneldashboardComponent;
  let fixture: ComponentFixture<PaneldashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaneldashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaneldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
