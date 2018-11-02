import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Category } from '../../shared/model/category'
import { CategoriesService } from '../../shared/service/dbCategoriesService';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categoriesRow : object[];
  categoriesRowCont: object[];
  totalCategoriesInserted: number = 0;

  constructor(private http: HttpClient,
              private _categoriesService : CategoriesService) {
    this.categoriesRowCont = new Array;
    this.categoriesRow = new Array;

    this.loadCategoryList();
  }

  loadCategoryList(){
    
    this._categoriesService.getCategories().subscribe(data => {   
      this.categoriesRowCont = new Array;
      this.categoriesRow = new Array;
      this.totalCategoriesInserted = 0;

      let categ = <Category[]>data.filter(cat => cat.list === true);
      //create category rows
     this.fillCategories(categ); 
    })
  }


  // private getCategoriesJSON(){
  //   return this.http.get("./../assets/jsonResources/categories.json")
  // }

  fillCategories(_CategoriesRow : object[]){

    if(_CategoriesRow.length > 4){     
   
      this.categoriesRow = _CategoriesRow.slice(this.totalCategoriesInserted, 4);
      _CategoriesRow.splice(this.totalCategoriesInserted, 4);
      this.totalCategoriesInserted =+ this.categoriesRow.length;
      this.categoriesRowCont.push(this.categoriesRow);
     
      this.fillCategories(_CategoriesRow);
    }else{
      this.categoriesRowCont.push(_CategoriesRow);
    }
  }
}
