import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerrequestsComponent } from './trainerrequests.component';

describe('TrainerrequestsComponent', () => {
  let component: TrainerrequestsComponent;
  let fixture: ComponentFixture<TrainerrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
