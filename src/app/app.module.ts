import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AllUsersTableComponent } from './components/gamification/all-users-table/all-users-table.component';
import { UserDetailsTableComponent } from './components/gamification/user-details-table/user-details-table.component';
import { ActiveKeepersComponent } from './components/keepers/active-keepers.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AllChannelsTableComponent } from './components/slack-archive/all-channels-table/all-channels-table.component';
import { ChannelMessagesTableComponent } from './components/slack-archive/channel-messages-table/channel-messages-table.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { GoTopComponent } from './components/shared/go-to-top/go-to-top.component';

import { GamificationService } from './service/gamification.service';
import { UserService } from './service/users.service';
import { ScrollDirective } from './directives/scroll.directive';
import { KeepersService } from './service/keepers.service';
import { TeamsService } from './service/teams.service';
import { SlackArchiveService} from "./service/slack-archive.service";

import { AppRoutingModule } from './app.router';

import { SortingPipe } from './pipes/sorting.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AllUsersTableComponent,
    UserDetailsTableComponent,
    ActiveKeepersComponent,
    TeamsComponent,
    AllChannelsTableComponent,
    ChannelMessagesTableComponent,
    HeaderComponent,
    GoTopComponent,
    ScrollDirective,
    SortingPipe
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    GamificationService,
    UserService,
    KeepersService,
    TeamsService,
    SlackArchiveService
  ]
})

export class AppModule { }
