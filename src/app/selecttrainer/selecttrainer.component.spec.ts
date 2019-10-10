import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttrainerComponent } from './selecttrainer.component';

describe('SelecttrainerComponent', () => {
  let component: SelecttrainerComponent;
  let fixture: ComponentFixture<SelecttrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
