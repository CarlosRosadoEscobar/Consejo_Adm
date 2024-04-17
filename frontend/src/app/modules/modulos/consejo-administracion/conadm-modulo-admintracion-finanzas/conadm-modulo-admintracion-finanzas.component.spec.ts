import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmModuloAdmintracionFinanzasComponent } from './conadm-modulo-admintracion-finanzas.component';

describe('ConadmModuloAdmintracionFinanzasComponent', () => {
  let component: ConadmModuloAdmintracionFinanzasComponent;
  let fixture: ComponentFixture<ConadmModuloAdmintracionFinanzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmModuloAdmintracionFinanzasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmModuloAdmintracionFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
