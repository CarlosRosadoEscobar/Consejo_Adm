import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuridicoCorporativoComponent } from './juridico-corporativo.component';

describe('JuridicoCorporativoComponent', () => {
  let component: JuridicoCorporativoComponent;
  let fixture: ComponentFixture<JuridicoCorporativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuridicoCorporativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuridicoCorporativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
