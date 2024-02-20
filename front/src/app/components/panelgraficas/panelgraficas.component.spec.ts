import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelgraficasComponent } from './panelgraficas.component';

describe('PanelgraficasComponent', () => {
  let component: PanelgraficasComponent;
  let fixture: ComponentFixture<PanelgraficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelgraficasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelgraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
