import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsTiGastoComponent } from './conadm-tabs-ti-gasto.component';

describe('ConadmTabsTiGastoComponent', () => {
  let component: ConadmTabsTiGastoComponent;
  let fixture: ComponentFixture<ConadmTabsTiGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsTiGastoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsTiGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
