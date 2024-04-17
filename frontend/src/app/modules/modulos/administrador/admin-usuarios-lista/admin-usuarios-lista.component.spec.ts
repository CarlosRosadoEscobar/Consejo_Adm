import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosListaComponent } from './admin-usuarios-lista.component';

describe('AdminUsuariosListaComponent', () => {
  let component: AdminUsuariosListaComponent;
  let fixture: ComponentFixture<AdminUsuariosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUsuariosListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUsuariosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
