import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmTabsPpPlantillaComponent } from './conadm-tabs-pp-plantilla.component';

describe('ConadmTabsPpPlantillaComponent', () => {
  let component: ConadmTabsPpPlantillaComponent;
  let fixture: ComponentFixture<ConadmTabsPpPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmTabsPpPlantillaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmTabsPpPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
