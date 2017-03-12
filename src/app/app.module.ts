import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { SortingPipe } from './sorting.pipe'

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SortingPipe
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
