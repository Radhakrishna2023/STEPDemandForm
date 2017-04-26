/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemandlistingComponent } from './demandlisting.component';

describe('DemandlistingComponent', () => {
  let component: DemandlistingComponent;
  let fixture: ComponentFixture<DemandlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
