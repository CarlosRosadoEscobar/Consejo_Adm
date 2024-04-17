import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmModulosComponent } from './conadm-modulos.component';

describe('ConadmModulosComponent', () => {
  let component: ConadmModulosComponent;
  let fixture: ComponentFixture<ConadmModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmModulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
