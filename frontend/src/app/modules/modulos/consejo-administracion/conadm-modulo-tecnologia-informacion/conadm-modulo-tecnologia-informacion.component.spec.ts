import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmModuloTecnologiaInformacionComponent } from './conadm-modulo-tecnologia-informacion.component';

describe('ConadmModuloTecnologiaInformacionComponent', () => {
  let component: ConadmModuloTecnologiaInformacionComponent;
  let fixture: ComponentFixture<ConadmModuloTecnologiaInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmModuloTecnologiaInformacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmModuloTecnologiaInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
