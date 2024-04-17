import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsPpProspectosComponent } from './conadm-tabs-pp-prospectos.component';

describe('ConadmTabsPpProspectosComponent', () => {
  let component: ConadmTabsPpProspectosComponent;
  let fixture: ComponentFixture<ConadmTabsPpProspectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsPpProspectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsPpProspectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
