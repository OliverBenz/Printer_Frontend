import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccsettingsComponent } from './accsettings.component';

describe('AccsettingsComponent', () => {
  let component: AccsettingsComponent;
  let fixture: ComponentFixture<AccsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
