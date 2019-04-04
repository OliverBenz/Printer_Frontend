import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdprintsComponent } from './adprints.component';

describe('AdprintsComponent', () => {
  let component: AdprintsComponent;
  let fixture: ComponentFixture<AdprintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdprintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
