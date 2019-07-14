import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppedComponent } from './stepped.component';

describe('SteppedComponent', () => {
  let component: SteppedComponent;
  let fixture: ComponentFixture<SteppedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteppedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
