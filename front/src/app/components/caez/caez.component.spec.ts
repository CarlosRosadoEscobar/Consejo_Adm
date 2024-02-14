import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaezComponent } from './caez.component';

describe('CaezComponent', () => {
  let component: CaezComponent;
  let fixture: ComponentFixture<CaezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaezComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
