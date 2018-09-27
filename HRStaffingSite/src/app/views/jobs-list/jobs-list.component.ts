import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HttpClient } from '@angular/common/http'; 
import { Category } from '../../shared/model/category'
import { Job } from '../../shared/model/job'


@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
  providers : [Category, Job]
})
export class JobsListComponent implements OnInit { 
  categoryDescription : string;  
  tags:string;  
  _jobs : Job[];


  constructor(private route: ActivatedRoute, 
              private http: HttpClient, 
              private _category : Category
             ) {
    this.route.params.subscribe( params => this.loadCategoryList(params['idCategory']));
   }

  ngOnInit() {
  }

  loadCategoryList(category : number){
    this.getCategoriesJSON().subscribe(data => {     
      let categ = <Category[]>data["categories"];
      //create category rows
      
      let catrow = categ.slice(0,4);
      console.log("catrow -->", catrow);
      
      data["categories"].filter( cat => cat.id === category).map( res => this._category = res);
      this.categoryDescription = this._category.categoryDescription.join("\n");   
      this.loadJobsByCategory(category); 
      
      


    })
  }

  loadJobsByCategory(category : number){
    this.getJobsListJSON().subscribe(data => {        
      let datares = <Job[]>data["jobs"].filter( job => job.categoryId === category);
      console.log("datares--> ", datares);

      this._jobs = datares;

      console.log("this._jobs -->", this._jobs);
    })
  }

  private getCategoriesJSON(){
    return this.http.get("./../assets/jsonResources/categories.json")
  }

  private getJobsListJSON(){
    return this.http.get("./../assets/jsonResources/jobs.json")
  }

}
