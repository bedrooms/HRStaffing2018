import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionprocessIndexComponent } from './selectionprocess-index.component';

describe('SelectionprocessIndexComponent', () => {
  let component: SelectionprocessIndexComponent;
  let fixture: ComponentFixture<SelectionprocessIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionprocessIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionprocessIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
