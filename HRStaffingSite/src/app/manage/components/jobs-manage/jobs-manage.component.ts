import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../shared/service/dbJobsService';
import { Job } from '../../../shared/model/job'

@Component({
  selector: 'app-jobs-manage',
  templateUrl: './jobs-manage.component.html',
  styleUrls: ['./jobs-manage.component.css']
})
export class JobsManageComponent implements OnInit {
  _jobs : Job[];
  _job = new Job();
  callFrom: string;

  constructor(private _jobService : JobsService) { 
  }

  ngOnInit() {
    this._jobService.getJobs().subscribe(jobs => {
      console.log("manage jobs -->", jobs);
      this._jobs = jobs;
    });
    this.callFrom = "View";
  }

  saveNewJob(value){
    console.log("save -->", this._job, value)
    this._jobService.saveJob(this._job);
  }



}
