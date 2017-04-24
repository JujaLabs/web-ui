import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { SortingPipe }   from './sorting.pipe';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import {HttpService}     from "./http.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    SortingPipe
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    HttpService
  ]
})

export class AppModule { }
