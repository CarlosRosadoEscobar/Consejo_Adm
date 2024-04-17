import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsAfRecursosMaterialesComponent } from './conadm-tabs-af-recursos-materiales.component';

describe('ConadmTabsAfRecursosMaterialesComponent', () => {
  let component: ConadmTabsAfRecursosMaterialesComponent;
  let fixture: ComponentFixture<ConadmTabsAfRecursosMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsAfRecursosMaterialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsAfRecursosMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
