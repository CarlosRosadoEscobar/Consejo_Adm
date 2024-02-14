import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionFinanzasComponent } from './administracion-finanzas.component';

describe('AdministracionFinanzasComponent', () => {
  let component: AdministracionFinanzasComponent;
  let fixture: ComponentFixture<AdministracionFinanzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionFinanzasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
