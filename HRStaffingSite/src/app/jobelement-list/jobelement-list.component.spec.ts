import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobelementListComponent } from './jobelement-list.component';

describe('JobelementListComponent', () => {
  let component: JobelementListComponent;
  let fixture: ComponentFixture<JobelementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobelementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobelementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
