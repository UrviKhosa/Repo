import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenttrainerComponent } from './paymenttrainer.component';

describe('PaymenttrainerComponent', () => {
  let component: PaymenttrainerComponent;
  let fixture: ComponentFixture<PaymenttrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymenttrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymenttrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
