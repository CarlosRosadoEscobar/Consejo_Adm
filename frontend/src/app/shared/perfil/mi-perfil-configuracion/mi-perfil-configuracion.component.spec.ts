import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPerfilConfiguracionComponent } from './mi-perfil-configuracion.component';

describe('MiPerfilConfiguracionComponent', () => {
  let component: MiPerfilConfiguracionComponent;
  let fixture: ComponentFixture<MiPerfilConfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiPerfilConfiguracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiPerfilConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
