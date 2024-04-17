import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdtBitacoraComponent } from './adt-bitacora.component';

describe('AdtBitacoraComponent', () => {
  let component: AdtBitacoraComponent;
  let fixture: ComponentFixture<AdtBitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdtBitacoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdtBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
