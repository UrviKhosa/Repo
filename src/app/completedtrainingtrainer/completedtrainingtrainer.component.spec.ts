import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedtrainingtrainerComponent } from './completedtrainingtrainer.component';

describe('CompletedtrainingtrainerComponent', () => {
  let component: CompletedtrainingtrainerComponent;
  let fixture: ComponentFixture<CompletedtrainingtrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedtrainingtrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedtrainingtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
