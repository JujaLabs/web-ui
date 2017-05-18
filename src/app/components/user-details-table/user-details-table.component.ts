import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {GamificationService}            from '../../service/gamification.service';
import {UserDetails}                     from "../../model/userDetails";

@Component({
    selector: 'user-details-table',
    templateUrl: 'app/components/user-details-table/user-details-table.component.html',
    styleUrls: ['app/components/user-details-table/user-details-table.component.css'],
})

export class UserDetailsTableComponent implements OnInit {
    title = 'User Details Table';
    userDetails : UserDetails;

    constructor(
        private gamificationService: GamificationService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    getUserDetails(): void {
        this.route.params
            .switchMap((params: Params) => this.gamificationService.getUserDetails(params['uuid']))
            .subscribe(data  => this.userDetails = data[0]);
    }

    ngOnInit(): void {
        this.getUserDetails();
    }

    goBack(): void {
        this.location.back();
    }
}
