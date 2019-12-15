import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallListFormComponent } from './call-list-form.component';

describe('CallListFormComponent', () => {
  let component: CallListFormComponent;
  let fixture: ComponentFixture<CallListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
