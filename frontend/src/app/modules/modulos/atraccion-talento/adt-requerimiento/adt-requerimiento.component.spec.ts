import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdtRequerimientoComponent } from './adt-requerimiento.component';

describe('AdtRequerimientoComponent', () => {
  let component: AdtRequerimientoComponent;
  let fixture: ComponentFixture<AdtRequerimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdtRequerimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdtRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
