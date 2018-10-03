import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Category } from '../../shared/model/category'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categoriesRow : object[];
  categoriesRowCont: object[];
  totalCategoriesInserted: number = 0;

  constructor(private http: HttpClient) {
    this.categoriesRowCont = new Array;
    this.categoriesRow = new Array;

    this.loadCategoryList();
  }

  loadCategoryList(){
    this.getCategoriesJSON().subscribe(data => {   
      let categ = <Category[]>data["categories"];
      //create category rows
     this.fillCategories(categ); 
    })
  }


  private getCategoriesJSON(){
    return this.http.get("./../assets/jsonResources/categories.json")
  }

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

    console.log("this.categoriesRowCont -->", this.categoriesRowCont);
  }
}
