import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { SortingPipe }   from './pipes/sorting.pipe';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import {TableComponent} from  './components/table/table.component';
import {HttpService}     from "./service/http.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
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
    HttpService
  ]
})

export class AppModule { }
