import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Statement2Component } from './statement2.component';

describe('Statement2Component', () => {
  let component: Statement2Component;
  let fixture: ComponentFixture<Statement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Statement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Statement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
