import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelexportarComponent } from './panelexportar.component';

describe('PanelexportarComponent', () => {
  let component: PanelexportarComponent;
  let fixture: ComponentFixture<PanelexportarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelexportarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelexportarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
