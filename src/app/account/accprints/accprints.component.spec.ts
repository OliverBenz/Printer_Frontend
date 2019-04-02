import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccprintsComponent } from './accprints.component';

describe('AccprintsComponent', () => {
  let component: AccprintsComponent;
  let fixture: ComponentFixture<AccprintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccprintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
