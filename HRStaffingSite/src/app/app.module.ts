import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { JobsIndexComponent } from './jobs-index/jobs-index.component';
import { CreateaccountIndexComponent } from './createaccount-index/createaccount-index.component';
import { SelectionprocessIndexComponent } from './selectionprocess-index/selectionprocess-index.component';
import { CandidatesIndexComponent } from './candidates-index/candidates-index.component';
import { StatsIndexComponent } from './stats-index/stats-index.component';
import { JobblogIndexComponent } from './jobblog-index/jobblog-index.component';
import { MobileappIndexComponent } from './mobileapp-index/mobileapp-index.component';
import { ClientsfeedbackIndexComponent } from './clientsfeedback-index/clientsfeedback-index.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderSearchComponent } from './header-search/header-search.component';

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
    HeaderSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
