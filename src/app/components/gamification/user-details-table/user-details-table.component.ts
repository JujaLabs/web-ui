import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {UserService} from '../../../service/users.service';
import {GamificationService} from '../../../service/gamification.service';

import {UserDetails} from '../../../model/gamification/userDetails';
import {User} from '../../../model/users/user';

@Component({
    selector: 'app-user-details-table',
    templateUrl: './user-details-table.component.html',
    styleUrls: ['./user-details-table.component.css'],
})

export class UserDetailsTableComponent implements OnInit {
    title: string;
    user: User;
    users: User[];
    userDetails: UserDetails;
    isViewTable: boolean;
    pointSum: number;

    constructor(
        private gamificationService: GamificationService,
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.title = 'User Details Table';
        this.user = {name: '', uuid: '', skype: '', slack: ''};
        this.userDetails = {user: '', details: []};
        this.isViewTable = false;
        this.pointSum = 0;
        this.getUserDetails();
    }

    getUserDetails(): void {
        this.route.params
          .switchMap((params: Params) => this.gamificationService.getUserDetails(params['uuid']))
          .subscribe(
            (userDetails: any) => {
              this.userDetails = userDetails[0];
              this.getPointSum();
              this.getNameByUuid();
            },
            (error: any) => {
              console.log(error);
            }
          );
    }

    getNameByUuid(): void {
        this.userService.getNameByUuid(this.getUuids())
          .subscribe(
            (users: Array<any>) => {
              this.users = users;
              this.compoundData();
            },
            (error: any) => {
              console.log(error);
            }
          );
    }

    getUuids(): Set<string> {
      const uuids = new Set();
      if (this.userDetails.details.length) {
        uuids.add(this.userDetails.details[0].to.toString());
        this.userDetails.details.forEach(detail => uuids.add(detail.from.toString()));
      }
      return uuids;
    }

    compoundData(): void {
        let result: User[];
            if (this.userDetails.details.length) {
                result = this.users.filter(item => item.uuid === this.userDetails.details[0].to);
                if (result.length) {
                    this.user.uuid = result[0].uuid;
                    this.user.name = result[0].name;
                }else {
                    this.user.uuid = this.userDetails.details[0].to;
                    this.user.name = this.user.uuid;
                }
                this.userDetails.details.forEach(detail => {
                  result = this.users.filter(item => item.uuid === detail.from);
                    result.length ? detail.from = result[0].name : detail.from = detail.from;
                });
                this.isViewTable = true;
            }
    }

    goBack(): void {
      this.location.back();
    }
    getPointSum(): void {
      this.userDetails.details.forEach(detail => this.pointSum += detail.point);
    }
}
