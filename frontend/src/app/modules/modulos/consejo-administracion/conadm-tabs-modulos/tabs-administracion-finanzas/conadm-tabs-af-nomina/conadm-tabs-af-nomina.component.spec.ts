import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsAfNominaComponent } from './conadm-tabs-af-nomina.component';

describe('ConadmTabsAfNominaComponent', () => {
  let component: ConadmTabsAfNominaComponent;
  let fixture: ComponentFixture<ConadmTabsAfNominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsAfNominaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsAfNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
