import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminblockComponent } from './adminblock.component';

describe('AdminblockComponent', () => {
  let component: AdminblockComponent;
  let fixture: ComponentFixture<AdminblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
