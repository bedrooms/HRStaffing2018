import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsfeedbackIndexComponent } from './clientsfeedback-index.component';

describe('ClientsfeedbackIndexComponent', () => {
  let component: ClientsfeedbackIndexComponent;
  let fixture: ComponentFixture<ClientsfeedbackIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsfeedbackIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsfeedbackIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
