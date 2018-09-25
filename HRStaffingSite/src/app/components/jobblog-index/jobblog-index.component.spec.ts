import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobblogIndexComponent } from './jobblog-index.component';

describe('JobblogIndexComponent', () => {
  let component: JobblogIndexComponent;
  let fixture: ComponentFixture<JobblogIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobblogIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobblogIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
