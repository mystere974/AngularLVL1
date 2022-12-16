import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLoginPasswordComponent } from './input-login-password.component';

describe('InputLoginPasswordComponent', () => {
  let component: InputLoginPasswordComponent;
  let fixture: ComponentFixture<InputLoginPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLoginPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputLoginPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
