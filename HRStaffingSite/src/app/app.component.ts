import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'HRStaffingSite';
  HideHeader = false;
  constructor (r: Router){
    r.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        console.log("event -->", event);
        console.log("event.url -->", event.url);
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }
}
