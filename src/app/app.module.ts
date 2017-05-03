import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { SortingPipe }   from './pipes/sorting.pipe';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryUserService }  from './service/in-memory-user.service';

import { AppComponent }  from './app.component';
import {TableComponent} from  './components/table/table.component';
import {GamificationService}     from "./service/gamification.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryUserService)
  ],
  declarations: [
    AppComponent,
    SortingPipe,
    TableComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    GamificationService
  ]
})

export class AppModule { }
