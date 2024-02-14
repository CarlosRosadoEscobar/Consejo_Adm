import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuridicoNormativoComponent } from './juridico-normativo.component';

describe('JuridicoNormativoComponent', () => {
  let component: JuridicoNormativoComponent;
  let fixture: ComponentFixture<JuridicoNormativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuridicoNormativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuridicoNormativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
