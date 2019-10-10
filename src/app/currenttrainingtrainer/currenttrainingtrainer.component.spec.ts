import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenttrainingtrainerComponent } from './currenttrainingtrainer.component';

describe('CurrenttrainingtrainerComponent', () => {
  let component: CurrenttrainingtrainerComponent;
  let fixture: ComponentFixture<CurrenttrainingtrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenttrainingtrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenttrainingtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
