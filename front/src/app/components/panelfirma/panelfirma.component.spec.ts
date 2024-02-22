import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelfirmaComponent } from './panelfirma.component';

describe('PanelfirmaComponent', () => {
  let component: PanelfirmaComponent;
  let fixture: ComponentFixture<PanelfirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelfirmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelfirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
