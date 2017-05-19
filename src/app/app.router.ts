import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllUsersTableComponent } from './components/all-users-table/all-users-table.component';
import {UserDetailsTableComponent} from "./components/user-details-table/user-details-table.component";

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