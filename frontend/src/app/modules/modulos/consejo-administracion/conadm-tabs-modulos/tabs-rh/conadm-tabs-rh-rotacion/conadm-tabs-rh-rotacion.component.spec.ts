import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsRhRotacionComponent } from './conadm-tabs-rh-rotacion.component';

describe('ConadmTabsRhRotacionComponent', () => {
  let component: ConadmTabsRhRotacionComponent;
  let fixture: ComponentFixture<ConadmTabsRhRotacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsRhRotacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsRhRotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
