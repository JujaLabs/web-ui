import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { SortingPipe } from './pipes/sorting.pipe';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AllUsersTableComponent } from './components/all-users-table/all-users-table.component';
import { GamificationService } from './service/gamification.service';
import { UserService } from './service/user.service';
import { UserDetailsTableComponent } from './components/user-details-table/user-details-table.component';
import { ScrollDirective } from './directives/scroll.directive';
import { GoTopComponent } from './components/go-to-top/go-to-top.component';
import { ActiveKeepersComponent } from './components/active-keepers/active-keepers.component';
import { KeepersService } from './service/keepers.service';
import { TeamsService } from './service/teams.service';
import { TeamsComponent } from './components/teams/teams.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SortingPipe,
    AllUsersTableComponent,
    UserDetailsTableComponent,
    ScrollDirective,
    GoTopComponent,
    ActiveKeepersComponent,
    TeamsComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    GamificationService,
    UserService,
    KeepersService,
    TeamsService
  ]
})

export class AppModule { }
