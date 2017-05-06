import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService} from '../../service/user.service';
import {User} from "../../model/user";

@Component({
    selector: 'all-users-table',
    templateUrl: 'app/components/users/users.component.html',
})

export class UsersComponent implements OnInit{
    title = 'Users';
    users: User[];

    constructor(private userService: UserService){}

    ngOnInit(): void {
        this.getData();
    }

    private getData() {
        Observable.forkJoin(
            this.userService.getAllUsers()
        ).subscribe(
            data => {
                this.users = data[0];
            }
        )
    }

}