import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresDetailPage } from './pres-detail.page';

describe('PresDetailPage', () => {
  let component: PresDetailPage;
  let fixture: ComponentFixture<PresDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
