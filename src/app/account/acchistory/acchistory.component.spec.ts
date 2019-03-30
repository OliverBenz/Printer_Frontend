import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcchistoryComponent } from './acchistory.component';

describe('AcchistoryComponent', () => {
  let component: AcchistoryComponent;
  let fixture: ComponentFixture<AcchistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcchistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcchistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
