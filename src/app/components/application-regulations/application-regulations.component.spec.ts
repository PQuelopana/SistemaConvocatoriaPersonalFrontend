import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationRegulationsComponent } from './application-regulations.component';

describe('ApplicationRegulationsComponent', () => {
  let component: ApplicationRegulationsComponent;
  let fixture: ComponentFixture<ApplicationRegulationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationRegulationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
