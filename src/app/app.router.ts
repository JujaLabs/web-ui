import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllUsersTableComponent } from './components/gamification/all-users-table/all-users-table.component';
import { UserDetailsTableComponent } from './components/gamification/user-details-table/user-details-table.component';
import { ActiveKeepersComponent } from './components/keepers/active-keepers.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AllChannelsTableComponent } from './components/slack-archive/all-channels-table/all-channels-table.component';
import { ChannelMessagesTableComponent } from "./components/slack-archive/channel-messages-table/channel-messages-table.component";

const routes: Routes = [
    {
        path: 'all-users-table',
        component: AllUsersTableComponent
    },
    {
        path: 'user-details-table/:uuid',
        component: UserDetailsTableComponent
    },
    {
        path: 'active-keepers',
        component: ActiveKeepersComponent
    },
    {
        path: 'teams',
        component: TeamsComponent
    },
    {
        path: 'all-channels-table',
        component: AllChannelsTableComponent
    },
    {
         path: 'channel-messages-table/:id',
         component: ChannelMessagesTableComponent
    },
    {
        path: '',
        redirectTo: '/all-users-table',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
