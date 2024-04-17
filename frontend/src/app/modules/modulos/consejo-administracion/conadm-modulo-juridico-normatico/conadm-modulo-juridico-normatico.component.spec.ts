import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmModuloJuridicoNormaticoComponent } from './conadm-modulo-juridico-normatico.component';

describe('ConadmModuloJuridicoNormaticoComponent', () => {
  let component: ConadmModuloJuridicoNormaticoComponent;
  let fixture: ComponentFixture<ConadmModuloJuridicoNormaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmModuloJuridicoNormaticoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmModuloJuridicoNormaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
