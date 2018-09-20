import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../app/views/contact/contact.component';
import { IndexBodyComponent } from '../app/views/index-body/index-body.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'contactUs', component: ContactComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
   { path: 'home', component: IndexBodyComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
