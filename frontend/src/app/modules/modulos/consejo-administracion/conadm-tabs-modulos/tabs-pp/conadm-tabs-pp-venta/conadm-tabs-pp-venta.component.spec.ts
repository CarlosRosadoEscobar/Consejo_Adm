import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsPpVentaComponent } from './conadm-tabs-pp-venta.component';

describe('ConadmTabsPpVentaComponent', () => {
  let component: ConadmTabsPpVentaComponent;
  let fixture: ComponentFixture<ConadmTabsPpVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsPpVentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsPpVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
