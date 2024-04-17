import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsAfNotaCreditoComponent } from './conadm-tabs-af-nota-credito.component';

describe('ConadmTabsAfNotaCreditoComponent', () => {
  let component: ConadmTabsAfNotaCreditoComponent;
  let fixture: ComponentFixture<ConadmTabsAfNotaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsAfNotaCreditoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsAfNotaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
