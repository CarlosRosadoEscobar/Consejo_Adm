import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsCaezEmergenciasComponent } from './conadm-tabs-caez-emergencias.component';

describe('ConadmTabsCaezEmergenciasComponent', () => {
  let component: ConadmTabsCaezEmergenciasComponent;
  let fixture: ComponentFixture<ConadmTabsCaezEmergenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsCaezEmergenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsCaezEmergenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
