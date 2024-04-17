import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsAfProyeccionComponent } from './conadm-tabs-af-proyeccion.component';

describe('ConadmTabsAfProyeccionComponent', () => {
  let component: ConadmTabsAfProyeccionComponent;
  let fixture: ComponentFixture<ConadmTabsAfProyeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsAfProyeccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsAfProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
