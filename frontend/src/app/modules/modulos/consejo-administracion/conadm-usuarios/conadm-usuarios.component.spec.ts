import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConadmUsuariosComponent } from './conadm-usuarios.component';

describe('ConadmUsuariosComponent', () => {
  let component: ConadmUsuariosComponent;
  let fixture: ComponentFixture<ConadmUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConadmUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConadmUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
