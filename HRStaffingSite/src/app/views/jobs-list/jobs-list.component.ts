import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  categoryData: any;
  categoryTitle : string;
  categoryDescription : string;  
  tags:string;

  

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe( params => this.loadCategoryList(params['idCategory']));
   }

  ngOnInit() {
  }

  loadCategoryList(category : number){
    this.getCategoriesJSON().subscribe(data => {    
      this.categoryData = data["categories"].filter( a => a.id === category);     
      this.categoryTitle = this.categoryData[0].value;
      this.tags = this.categoryData[0].tags;
      this.categoryDescription = this.categoryData[0].description.join("\n");      
    })
    
  }

  private getCategoriesJSON(){
    return this.http.get("./../assets/jsonResources/categories.json")
  }

  private getJobsListJSON(){
    return this.http.get("./../assets/jsonResources/jobs.json")
  }

}
