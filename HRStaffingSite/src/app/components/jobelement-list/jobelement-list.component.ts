import { Component, Input } from '@angular/core';
import { Job } from '../../shared/model/job'

@Component({
  selector: 'jobelement-list',
  templateUrl: './jobelement-list.component.html',
  styleUrls: ['./jobelement-list.component.css']
})
export class JobelementListComponent {
  @Input() _callFrom;
  @Input() _jobObject : Job;
  constructor() {   
  }

  ngOnInit() {
  }
}
