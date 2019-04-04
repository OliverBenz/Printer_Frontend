import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdusersComponent } from './adusers.component';

describe('AdusersComponent', () => {
  let component: AdusersComponent;
  let fixture: ComponentFixture<AdusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
