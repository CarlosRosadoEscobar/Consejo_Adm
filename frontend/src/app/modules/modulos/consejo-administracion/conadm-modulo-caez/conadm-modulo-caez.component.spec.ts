import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmModuloCaezComponent } from './conadm-modulo-caez.component';

describe('ConadmModuloCaezComponent', () => {
  let component: ConadmModuloCaezComponent;
  let fixture: ComponentFixture<ConadmModuloCaezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmModuloCaezComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmModuloCaezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
