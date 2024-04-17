import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsOperacionesEstadoFuerzaComponent } from './conadm-tabs-operaciones-estado-fuerza.component';

describe('ConadmTabsOperacionesEstadoFuerzaComponent', () => {
  let component: ConadmTabsOperacionesEstadoFuerzaComponent;
  let fixture: ComponentFixture<ConadmTabsOperacionesEstadoFuerzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsOperacionesEstadoFuerzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsOperacionesEstadoFuerzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
