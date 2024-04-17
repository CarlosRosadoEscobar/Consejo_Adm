import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsTiInventarioDispositivosComponent } from './conadm-tabs-ti-inventario-dispositivos.component';

describe('ConadmTabsTiInventarioDispositivosComponent', () => {
  let component: ConadmTabsTiInventarioDispositivosComponent;
  let fixture: ComponentFixture<ConadmTabsTiInventarioDispositivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsTiInventarioDispositivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsTiInventarioDispositivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
