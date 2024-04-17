import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosActualizarComponent } from './admin-usuarios-actualizar.component';

describe('AdminUsuariosActualizarComponent', () => {
  let component: AdminUsuariosActualizarComponent;
  let fixture: ComponentFixture<AdminUsuariosActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUsuariosActualizarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUsuariosActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
