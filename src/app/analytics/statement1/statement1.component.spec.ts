import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Statement1Component } from './statement1.component';

describe('Statement1Component', () => {
  let component: Statement1Component;
  let fixture: ComponentFixture<Statement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Statement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Statement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
