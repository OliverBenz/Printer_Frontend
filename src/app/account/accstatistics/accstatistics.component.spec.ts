import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccstatisticsComponent } from './accstatistics.component';

describe('AccstatisticsComponent', () => {
  let component: AccstatisticsComponent;
  let fixture: ComponentFixture<AccstatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccstatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
