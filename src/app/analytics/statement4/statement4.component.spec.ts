import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Statement4Component } from './statement4.component';

describe('Statement1Component', () => {
  let component: Statement4Component;
  let fixture: ComponentFixture<Statement4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Statement4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Statement4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
