import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsJcContratosComponent } from './conadm-tabs-jc-contratos.component';

describe('ConadmTabsJcContratosComponent', () => {
  let component: ConadmTabsJcContratosComponent;
  let fixture: ComponentFixture<ConadmTabsJcContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsJcContratosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsJcContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
