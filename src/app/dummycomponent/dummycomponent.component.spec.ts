import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummycomponentComponent } from './dummycomponent.component';

describe('DummycomponentComponent', () => {
  let component: DummycomponentComponent;
  let fixture: ComponentFixture<DummycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
