import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { KeepersService } from '../../service/keepers.service';
import { UserService } from '../../service/user.service';
import { ActiveKeepers } from '../../model/activeKeepers';
import { User } from '../../model/user';
import { KeepersDetails } from '../../model/keepersDetails';

@Component({
  selector: 'active-keepers',
  templateUrl: './active-keepers.component.html',
  styleUrls: ['./active-keepers.component.css']
})
export class ActiveKeepersComponent implements OnInit {
  title: string;
  activeKeepers: ActiveKeepers[];
  isLoaded: boolean;
  users: User[];
  keepersDetails: KeepersDetails[];

  constructor(
    private keepersService: KeepersService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title = 'Active Keepers';
    this.isLoaded = false;
    this.keepersDetails = [];
    this.getActiveKeepers();
  }

  private getActiveKeepers(): void {
      this.keepersService.getActiveKeepers()
      .subscribe(
        (activeKeepers: ActiveKeepers[]) => {
          if (activeKeepers && activeKeepers.length) {
            this.activeKeepers = activeKeepers;
            this.getNameByUuid();
          }
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

  getUuids(): Set<string>  {
    const uuids = new Set();
    this.activeKeepers.forEach(keeper => uuids.add(keeper.uuid.toString()));
    return uuids;
  }

  compoundData(): void {
    const merged: Array<any> = _(this.users) // start sequence
      .keyBy('uuid') // create a dictionary of the 1st array
      .merge(_.keyBy(this.activeKeepers, 'uuid')) // create a dictionary of the 2nd array, and merge it to the 1st
      .values() // turn the combined dictionary to array
      .value();

    merged.forEach(element => {this.keepersDetails.push(element); });
    this.isLoaded = true;
  }

  gotoDetail(uuid: string): void {
    this.router.navigate(['/user-details-table', uuid]);
  }
}
