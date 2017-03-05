import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { SortingStringPipe } from './sorting-string.pipe'

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SortingStringPipe
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
