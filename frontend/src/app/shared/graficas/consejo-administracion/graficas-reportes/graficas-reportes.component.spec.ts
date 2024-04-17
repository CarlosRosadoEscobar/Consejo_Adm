import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasReportesComponent } from './graficas-reportes.component';

describe('GraficasReportesComponent', () => {
  let component: GraficasReportesComponent;
  let fixture: ComponentFixture<GraficasReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficasReportesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficasReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
