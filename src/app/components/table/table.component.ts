import {Component, HostListener, OnInit} from '@angular/core';
import { GamificationService}            from '../../service/gamification.service';
import {UserActivity}                    from '../../model/userActivity';
import {UserService}                     from "../../service/user.service";
import {User}                            from "../../model/user";
import {AllUsers}                        from "../../model/allUsers";
import { Observable }                    from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import * as _ from "lodash";

export enum KEY_CODE {
    UP_ARROW = 38,
    DOWN_ARROW = 40
}

@Component({
    selector: 'gamification-table',
    templateUrl: 'app/components/table/table.component.html',
    styleUrls: ['app/components/table/table.component.css'],
})

export class TableComponent implements OnInit{
    title = 'Table';
    userActivity: UserActivity[] = [];
    users: User[]= [];
    allUsers: AllUsers[] = [];
    key = '';
    counter = 0;
    selectedUser: UserActivity;
    selectedIndex: number;

    constructor(private gamificationService: GamificationService,
                private userService: UserService){}


    ngOnInit(): void {
        this.getData();
    }

    private getData() {
        Observable.forkJoin(
            this.gamificationService.getPointSumForAllUsers(),
            this.userService.getAllUsers()
        ).subscribe(
            data => {
                this.userActivity = this.convertData(data[0]);
                this.users = data[1];
                this.compoundData();
            }
        );
    }

    private convertData(data: Array<any>): Array<any> {
        data.forEach(element => {
            element.uid = element.to;
            delete element.to;
            });
        return data;
    }

    compoundData() {
        let merged: Array<any> = _(this.users) // start sequence
            .keyBy('uid') // create a dictionary of the 1st array
            .merge(_.keyBy(this.userActivity, 'uid')) // create a dictionary of the 2nd array, and merge it to the 1st
            .values() // turn the combined dictionary to array
            .value();

        merged.forEach(element => {
            if(element.hasOwnProperty('name') && element.hasOwnProperty('point')) {
                this.allUsers.push(element);
            } else if(element.hasOwnProperty('name') && !element.hasOwnProperty('point')) {
                element.point = 0;
                this.allUsers.push(element);
            }
        });
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        console.log(event);
        if (event.keyCode === KEY_CODE.UP_ARROW){
            this.selectedUser = this.userActivity[--this.selectedIndex];
        } else
        if (event.keyCode === KEY_CODE.DOWN_ARROW) {
            this.selectedUser = this.userActivity[++this.selectedIndex];
        }
    }

    onSelect(user: UserActivity, i: number): void {
        this.selectedUser = user;
        this.selectedIndex = i
    }

    setKey = (th: string) => {
        this.counter === 2 ? this.counter = 0 : this.counter++;
        th === 'name' ? this.key = 'name' : this.key = 'point';
    };
}