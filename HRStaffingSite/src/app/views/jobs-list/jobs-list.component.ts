import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  categoryTitle : string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {

    this.route.params.subscribe( params => this.loadCategoryList(params['idCategory']));

   }

  ngOnInit() {
  }

  loadCategoryList(category : number){



    this.categoryTitle = "";
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/categories.json")
}

}
