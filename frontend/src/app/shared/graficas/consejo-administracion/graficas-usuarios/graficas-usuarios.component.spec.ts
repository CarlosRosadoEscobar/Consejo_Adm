import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasUsuariosComponent } from './graficas-usuarios.component';

describe('GraficasUsuariosComponent', () => {
  let component: GraficasUsuariosComponent;
  let fixture: ComponentFixture<GraficasUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficasUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficasUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
