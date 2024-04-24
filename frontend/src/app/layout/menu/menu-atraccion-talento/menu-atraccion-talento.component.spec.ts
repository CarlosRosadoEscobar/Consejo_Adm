import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAtraccionTalentoComponent } from './menu-atraccion-talento.component';

describe('MenuAtraccionTalentoComponent', () => {
  let component: MenuAtraccionTalentoComponent;
  let fixture: ComponentFixture<MenuAtraccionTalentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuAtraccionTalentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuAtraccionTalentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
