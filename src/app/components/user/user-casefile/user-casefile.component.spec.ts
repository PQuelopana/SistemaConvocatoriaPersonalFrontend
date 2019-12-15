import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCasefileComponent } from './user-casefile.component';

describe('UserCasefileComponent', () => {
  let component: UserCasefileComponent;
  let fixture: ComponentFixture<UserCasefileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCasefileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCasefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
