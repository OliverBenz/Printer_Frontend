import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccqueueComponent } from './accqueue.component';

describe('AccqueueComponent', () => {
  let component: AccqueueComponent;
  let fixture: ComponentFixture<AccqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
