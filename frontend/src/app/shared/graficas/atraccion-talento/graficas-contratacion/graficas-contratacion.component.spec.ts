import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasContratacionComponent } from './graficas-contratacion.component';

describe('GraficasContratacionComponent', () => {
  let component: GraficasContratacionComponent;
  let fixture: ComponentFixture<GraficasContratacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficasContratacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficasContratacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
