import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../shared/service/dbCategoriesService';
import { Category } from '../../../shared/model/category'

@Component({
  selector: 'app-categories-manage',
  templateUrl: './categories-manage.component.html',
  styleUrls: ['./categories-manage.component.css']
})
export class CategoriesManageComponent implements OnInit {
  _categories : Category[];
  _category = new Category();
  callFrom: string;

  constructor(private _categoriesService : CategoriesService) { }

  ngOnInit() {
    this._categoriesService.getCategories().subscribe(categories => {
      this._categories = categories;
    });
    this.callFrom = "View";
  }

  saveNewCategory(value){
    this._categoriesService.saveCategories(this._category);
  }

}
