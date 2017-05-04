import {Component, HostListener, OnInit} from '@angular/core';
import { GamificationService}            from '../../service/gamification.service';
import {UserActivity}                    from '../../model/userActivity';
import {UserService}                     from "../../service/user.service";
import {User}                            from "../../model/user";
import { Observable }                    from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

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
                this.userActivity = data[0];
                this.users = data[1];
            }
        )
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
        th === 'to' ? this.key = 'to' : this.key = 'point';
    };
}