import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelimportarComponent } from './panelimportar.component';

describe('PanelimportarComponent', () => {
  let component: PanelimportarComponent;
  let fixture: ComponentFixture<PanelimportarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelimportarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelimportarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
