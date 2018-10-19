import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { JobsIndexComponent } from './components/jobs-index/jobs-index.component';
import { CreateaccountIndexComponent } from './components/createaccount-index/createaccount-index.component';
import { SelectionprocessIndexComponent } from './components/selectionprocess-index/selectionprocess-index.component';
import { CandidatesIndexComponent } from './components/candidates-index/candidates-index.component';
import { StatsIndexComponent } from './components/stats-index/stats-index.component';
import { JobblogIndexComponent } from './components/jobblog-index/jobblog-index.component';
import { MobileappIndexComponent } from './components/mobileapp-index/mobileapp-index.component';
import { ClientsfeedbackIndexComponent } from './components/clientsfeedback-index/clientsfeedback-index.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactComponent } from './views/contact/contact.component';
import { IndexBodyComponent } from './views/index-body/index-body.component';
import { JobsListComponent } from './views/jobs-list/jobs-list.component';
import { JobelementListComponent } from './components/jobelement-list/jobelement-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    JobsIndexComponent,
    CreateaccountIndexComponent,
    SelectionprocessIndexComponent,
    CandidatesIndexComponent,
    StatsIndexComponent,
    JobblogIndexComponent,
    MobileappIndexComponent,
    ClientsfeedbackIndexComponent,
    FooterComponent,
    HeaderSearchComponent,
    NavbarComponent,
    ContactComponent,
    IndexBodyComponent,
    JobsListComponent,
    JobelementListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
