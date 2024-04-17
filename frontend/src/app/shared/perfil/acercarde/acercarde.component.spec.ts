import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercardeComponent } from './acercarde.component';

describe('AcercardeComponent', () => {
  let component: AcercardeComponent;
  let fixture: ComponentFixture<AcercardeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcercardeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcercardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
