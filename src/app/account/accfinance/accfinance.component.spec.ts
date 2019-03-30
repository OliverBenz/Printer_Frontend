import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccfinanceComponent } from './accfinance.component';

describe('AccfinanceComponent', () => {
  let component: AccfinanceComponent;
  let fixture: ComponentFixture<AccfinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccfinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccfinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
