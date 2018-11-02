import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HttpClient } from '@angular/common/http'; 
import { Category } from '../../shared/model/category'
import { Job } from '../../shared/model/job'
import { MailService } from '../../shared/service/mailService';
import { JobsService } from '../../shared/service/dbJobsService';
import { CategoriesService } from '../../shared/service/dbCategoriesService';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
  providers : [Category, Job]
  
})


export class JobsListComponent implements OnInit { 
  mail: string;
  senderName: string;
  message: string;
  contactNumber: string;
  allowSubmit: boolean = false;
  subject: string = "Contact Business Network Mail";
  numb : number = 0;

  categoryDescription : string;  
  tags:string;  
  _jobs : Job[];
  callFrom: string;

  constructor(private route: ActivatedRoute, 
              private http: HttpClient, 
              public _category : Category,
              private _mailService: MailService,
              private _jobService : JobsService,
              private _categoryService : CategoriesService
             ) {
    this.route.params.subscribe( params => this.loadCategoryList(params['idCategory']));
   }

  
  ngOnInit() {   
    this.callFrom = "Apply now!";
  }

  sendMail(){
    // let urlSearchParams = new URLSearchParams(); 
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Access-Control-Allow-Origin', '*');

    // urlSearchParams.append('mailfrom', this.mail);
    // urlSearchParams.append('mailfromname', this.senderName);
    // urlSearchParams.append('mail', this.message);

    // // LOCAL http://localhost:5000/hr-staff/us-central1/SendMail
    // // SERVER https://us-central1-hr-staff.cloudfunctions.net/SendMail

    // this._http.post('https://us-central1-hr-staff.cloudfunctions.net/SendMail', urlSearchParams, {headers :headers, params:urlSearchParams}).subscribe(
    //   data => {
    //     this.senderName = undefined;
    //     this.message = undefined;
    //     this.mail = undefined;
    //     this.allowSubmit = false;
    //   },
    //   error => console.log("Error -->", error)
    // )

    this._mailService.sendMail(this.mail,this.senderName,this.message,this.subject, this.contactNumber).then(data => {
      console.log("data -->", data);
      if(data.ok){
          this.senderName = undefined;
          this.message = undefined;
          this.mail = undefined;
          this.allowSubmit = false;
        }
      }
    );
  }

  loadCategoryList(category : number){
    this._categoryService.getCategories().subscribe(data => {  
        data.filter( cat => cat.id == category).map( res => this._category = res); 
        this.categoryDescription = this._category.categoryDescription; 
        this.loadJobsByCategory(category);  
    })
  }
  

  loadJobsByCategory(category : number){
    this._jobService.getJobs().subscribe(data => {  
      var  datares;
      if(category != 0){
        datares = <Job[]>data.filter( job => job.categoryId === category);
      }else{
        datares = <Job[]>data;
      }    
      this._jobs = datares;
    })
  }

  onChange() {
    if((this.mail == undefined || this.mail == "") || 
       (this.senderName == undefined || this.senderName == "") || 
       (this.message == undefined || this.message == "") ||
       (this.contactNumber == undefined || this.contactNumber == "")){
        this.allowSubmit = false;
    } else{
      this.allowSubmit = true;
    }

  }

  // private getCategoriesJSON(){
  //   return this.http.get("./../assets/jsonResources/categories.json")
  // }

  // private getJobsListJSON(){
  //   return this.http.get("./../assets/jsonResources/jobs.json")
  // }

}
