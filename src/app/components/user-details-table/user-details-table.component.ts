import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {UserService} from "../../service/user.service";
import {GamificationService}            from '../../service/gamification.service';

import {UserDetails}                     from "../../model/userDetails";
import {User} from "../../model/user";

@Component({
    selector: 'user-details-table',
    templateUrl: './user-details-table.component.html',
    styleUrls: ['./user-details-table.component.css'],
})

export class UserDetailsTableComponent implements OnInit {
    title = 'User Details Table';
    user: User = {name:"", uuid:"", skype:"", slack:""};
    users: User[];
    userDetails : UserDetails;
    viewTable: boolean = false;

    constructor(
        private gamificationService: GamificationService,
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    getUserDetails(): void {
        this.route.params
            .switchMap((params: Params) => this.gamificationService.getUserDetails(params['uuid']))
            .subscribe(
                data  => (
                    this.userDetails = data[0],
                    this.userService.getNameByUuid(this.getUuids())
                        .subscribe(
                            data => (
                                this.users = data,
                                this.compoundData()
                            )
                        )
                ),
                (error: any) => {
                    console.log(error);}
            );
    }

    getUuids() : string[] {
        let uuids = new Set();
        if(this.userDetails.details.length) {
            uuids.add(this.userDetails.details[0].to);
            this.userDetails.details.forEach(detail => uuids.add(detail.from));
        }
        return Array.from(uuids);
    }

    compoundData(): void {
        if(this.userDetails.details.length) {
            let result: User[];
            result = this.users.filter(item => item.uuid === this.userDetails.details[0].to);
            result.length ? (this.user.uuid = result[0].uuid, this.user.name = result[0].name) :
                (this.user.uuid = this.userDetails.details[0].to, this.user.name = this.user.uuid);
            this.userDetails.details.forEach(detail => (
                result = this.users.filter(item => item.uuid === detail.from),
                result.length ? detail.from = result[0].name : detail.from = detail.from
            ));
            this.viewTable = true;
        }
    }

    ngOnInit(): void {
        this.getUserDetails();
    }

    goBack(): void {
        this.location.back();
    }
}
