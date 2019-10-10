import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmanagepaymentsComponent } from './adminmanagepayments.component';

describe('AdminmanagepaymentsComponent', () => {
  let component: AdminmanagepaymentsComponent;
  let fixture: ComponentFixture<AdminmanagepaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmanagepaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmanagepaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
