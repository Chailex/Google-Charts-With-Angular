import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApollotyreComponent } from './apollotyre.component';

describe('ApollotyreComponent', () => {
  let component: ApollotyreComponent;
  let fixture: ComponentFixture<ApollotyreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApollotyreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApollotyreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
