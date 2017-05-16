import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { SortingPipe }   from './pipes/sorting.pipe';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDataService }  from './service/mock-data.service';

import { AppComponent }  from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AllUsersTableComponent} from  './components/all-users-table/all-users-table.component';
import {GamificationService}     from "./service/gamification.service";
import {UserService}     from "./service/user.service";
import {UserDetailsTableComponent} from "./components/user-details-table/user-details-table.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(MockDataService, {
      passThruUnknownUrl: true
    })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SortingPipe,
    AllUsersTableComponent,
    UserDetailsTableComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    GamificationService,
    UserService
  ]
})

export class AppModule { }
