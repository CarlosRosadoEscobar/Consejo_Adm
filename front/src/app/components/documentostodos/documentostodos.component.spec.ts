import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentostodosComponent } from './documentostodos.component';

describe('DocumentostodosComponent', () => {
  let component: DocumentostodosComponent;
  let fixture: ComponentFixture<DocumentostodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentostodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentostodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
