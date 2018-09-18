import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'HRStaffingSite';
  router;
  constructor (r: Router){
    this.router = r;
    console.log(this.router.url);
  }
}
