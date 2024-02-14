import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelmodulosComponent } from './panelmodulos.component';

describe('PanelmodulosComponent', () => {
  let component: PanelmodulosComponent;
  let fixture: ComponentFixture<PanelmodulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelmodulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelmodulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
