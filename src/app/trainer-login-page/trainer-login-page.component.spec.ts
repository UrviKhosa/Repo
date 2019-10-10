import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerLoginPageComponent } from './trainer-login-page.component';

describe('TrainerLoginPageComponent', () => {
  let component: TrainerLoginPageComponent;
  let fixture: ComponentFixture<TrainerLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
