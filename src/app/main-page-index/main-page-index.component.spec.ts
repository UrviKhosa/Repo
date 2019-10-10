import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageIndexComponent } from './main-page-index.component';

describe('MainPageIndexComponent', () => {
  let component: MainPageIndexComponent;
  let fixture: ComponentFixture<MainPageIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
