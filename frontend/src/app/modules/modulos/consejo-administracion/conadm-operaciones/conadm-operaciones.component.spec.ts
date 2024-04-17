import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmOperacionesComponent } from './conadm-operaciones.component';

describe('ConadmOperacionesComponent', () => {
  let component: ConadmOperacionesComponent;
  let fixture: ComponentFixture<ConadmOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmOperacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
