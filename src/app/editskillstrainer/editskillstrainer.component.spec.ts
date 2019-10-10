import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditskillstrainerComponent } from './editskillstrainer.component';

describe('EditskillstrainerComponent', () => {
  let component: EditskillstrainerComponent;
  let fixture: ComponentFixture<EditskillstrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditskillstrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditskillstrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
