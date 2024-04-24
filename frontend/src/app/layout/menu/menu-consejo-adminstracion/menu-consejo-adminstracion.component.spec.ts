import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConsejoAdminstracionComponent } from './menu-consejo-adminstracion.component';

describe('MenuConsejoAdminstracionComponent', () => {
  let component: MenuConsejoAdminstracionComponent;
  let fixture: ComponentFixture<MenuConsejoAdminstracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuConsejoAdminstracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuConsejoAdminstracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
