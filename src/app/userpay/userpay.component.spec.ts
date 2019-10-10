import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpayComponent } from './userpay.component';

describe('UserpayComponent', () => {
  let component: UserpayComponent;
  let fixture: ComponentFixture<UserpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
