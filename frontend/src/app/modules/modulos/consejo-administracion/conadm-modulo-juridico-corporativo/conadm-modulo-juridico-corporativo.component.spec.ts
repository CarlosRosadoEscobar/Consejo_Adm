import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmModuloJuridicoCorporativoComponent } from './conadm-modulo-juridico-corporativo.component';

describe('ConadmModuloJuridicoCorporativoComponent', () => {
  let component: ConadmModuloJuridicoCorporativoComponent;
  let fixture: ComponentFixture<ConadmModuloJuridicoCorporativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmModuloJuridicoCorporativoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmModuloJuridicoCorporativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
