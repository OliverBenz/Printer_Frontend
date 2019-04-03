import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSiteComponent } from './login-site.component';

describe('LoginSiteComponent', () => {
  let component: LoginSiteComponent;
  let fixture: ComponentFixture<LoginSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
