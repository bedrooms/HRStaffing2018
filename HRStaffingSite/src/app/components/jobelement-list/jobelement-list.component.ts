import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../shared/model/job'

@Component({
  selector: 'jobelement-list',
  templateUrl: './jobelement-list.component.html',
  styleUrls: ['./jobelement-list.component.css']
})
export class JobelementListComponent implements OnInit {
  @Input() _jobObject : Job;
  constructor() { }

  ngOnInit() {
  }

}
