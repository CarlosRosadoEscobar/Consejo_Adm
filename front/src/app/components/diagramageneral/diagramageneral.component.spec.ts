import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramageneralComponent } from './diagramageneral.component';

describe('DiagramageneralComponent', () => {
  let component: DiagramageneralComponent;
  let fixture: ComponentFixture<DiagramageneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramageneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagramageneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
