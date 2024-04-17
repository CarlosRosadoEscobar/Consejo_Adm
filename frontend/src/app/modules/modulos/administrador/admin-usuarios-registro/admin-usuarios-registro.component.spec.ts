import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosRegistroComponent } from './admin-usuarios-registro.component';

describe('AdminUsuariosRegistroComponent', () => {
  let component: AdminUsuariosRegistroComponent;
  let fixture: ComponentFixture<AdminUsuariosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUsuariosRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUsuariosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
