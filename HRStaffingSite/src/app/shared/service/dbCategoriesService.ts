import {Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Category } from '../model/category';



@Injectable()
export class CategoriesService {
    categoriesCollection: AngularFirestoreCollection<Category>;
    categories: Observable<Category[]>;
    constructor (public afs: AngularFirestore ){ 
        
    }

    getCategories(){
        this.categories = this.afs.collection<Category>('categories').valueChanges();
        console.log("service categories -->", this.categories);
        return this.categories;
    }

    saveCategories(_categories : any){
        var ww = this.afs.collection('categories').add(Object.assign({}, _categories)); 
    }
  
  }