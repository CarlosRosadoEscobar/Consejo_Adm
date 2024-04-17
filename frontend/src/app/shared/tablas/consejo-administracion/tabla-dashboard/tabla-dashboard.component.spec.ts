import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDashboardComponent } from './tabla-dashboard.component';

describe('TablaDashboardComponent', () => {
  let component: TablaDashboardComponent;
  let fixture: ComponentFixture<TablaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
