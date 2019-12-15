import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriaListadoComponent } from './convocatoria-listado.component';

describe('ConvocatoriaListadoComponent', () => {
  let component: ConvocatoriaListadoComponent;
  let fixture: ComponentFixture<ConvocatoriaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocatoriaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoriaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
