import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLeftNavComponent } from './common-left-nav.component';

describe('CommonLeftNavComponent', () => {
  let component: CommonLeftNavComponent;
  let fixture: ComponentFixture<CommonLeftNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonLeftNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonLeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
