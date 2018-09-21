import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../app/views/contact/contact.component';
import { IndexBodyComponent } from '../app/views/index-body/index-body.component';
import { JobsListComponent } from './views/jobs-list/jobs-list.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'contactUs', component: ContactComponent },
   { path: 'jobs/:idCategory', component: JobsListComponent },
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
