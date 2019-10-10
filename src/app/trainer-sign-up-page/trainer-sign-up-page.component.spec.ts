import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerSignUpPageComponent } from './trainer-sign-up-page.component';

describe('TrainerSignUpPageComponent', () => {
  let component: TrainerSignUpPageComponent;
  let fixture: ComponentFixture<TrainerSignUpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerSignUpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerSignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
