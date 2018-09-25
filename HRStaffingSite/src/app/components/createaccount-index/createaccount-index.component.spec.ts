import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccountIndexComponent } from './createaccount-index.component';

describe('CreateaccountIndexComponent', () => {
  let component: CreateaccountIndexComponent;
  let fixture: ComponentFixture<CreateaccountIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateaccountIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaccountIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
