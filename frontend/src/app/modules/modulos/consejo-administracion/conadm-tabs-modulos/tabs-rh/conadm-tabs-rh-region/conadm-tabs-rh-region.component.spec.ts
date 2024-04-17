import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsRhRegionComponent } from './conadm-tabs-rh-region.component';

describe('ConadmTabsRhRegionComponent', () => {
  let component: ConadmTabsRhRegionComponent;
  let fixture: ComponentFixture<ConadmTabsRhRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsRhRegionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsRhRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
