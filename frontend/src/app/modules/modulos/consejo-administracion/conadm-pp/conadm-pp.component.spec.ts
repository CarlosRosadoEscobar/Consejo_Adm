import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmPPComponent } from './conadm-pp.component';

describe('ConadmPPComponent', () => {
  let component: ConadmPPComponent;
  let fixture: ComponentFixture<ConadmPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmPPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
