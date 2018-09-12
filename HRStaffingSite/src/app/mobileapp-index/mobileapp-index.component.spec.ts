import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileappIndexComponent } from './mobileapp-index.component';

describe('MobileappIndexComponent', () => {
  let component: MobileappIndexComponent;
  let fixture: ComponentFixture<MobileappIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileappIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileappIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
