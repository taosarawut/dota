import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedotaPage } from './createdota.page';

describe('CreatedotaPage', () => {
  let component: CreatedotaPage;
  let fixture: ComponentFixture<CreatedotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedotaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
