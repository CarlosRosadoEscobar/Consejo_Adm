import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmFirmaComponent } from './conadm-firma.component';

describe('ConadmFirmaComponent', () => {
  let component: ConadmFirmaComponent;
  let fixture: ComponentFixture<ConadmFirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmFirmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
