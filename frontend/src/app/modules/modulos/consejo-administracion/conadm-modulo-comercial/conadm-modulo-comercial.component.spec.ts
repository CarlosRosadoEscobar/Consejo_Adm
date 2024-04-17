import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmModuloComercialComponent } from './conadm-modulo-comercial.component';

describe('ConadmModuloComercialComponent', () => {
  let component: ConadmModuloComercialComponent;
  let fixture: ComponentFixture<ConadmModuloComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmModuloComercialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmModuloComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
