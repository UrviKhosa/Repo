import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageUserComponent } from './login-page-user.component';

describe('LoginPageUserComponent', () => {
  let component: LoginPageUserComponent;
  let fixture: ComponentFixture<LoginPageUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
