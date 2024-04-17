import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsOperacionesCoberturaComponent } from './conadm-tabs-operaciones-cobertura.component';

describe('ConadmTabsOperacionesCoberturaComponent', () => {
  let component: ConadmTabsOperacionesCoberturaComponent;
  let fixture: ComponentFixture<ConadmTabsOperacionesCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsOperacionesCoberturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsOperacionesCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
