import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmModuloRHComponent } from './conadm-modulo-rh.component';

describe('ConadmModuloRHComponent', () => {
  let component: ConadmModuloRHComponent;
  let fixture: ComponentFixture<ConadmModuloRHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmModuloRHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmModuloRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
