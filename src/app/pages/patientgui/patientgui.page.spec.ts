import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientguiPage } from './patientgui.page';

describe('PatientguiPage', () => {
  let component: PatientguiPage;
  let fixture: ComponentFixture<PatientguiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientguiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientguiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
