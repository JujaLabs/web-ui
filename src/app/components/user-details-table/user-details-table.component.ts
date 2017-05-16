import {Component, Input, OnInit} from '@angular/core';
import {GamificationService}            from '../../service/gamification.service';
import {User}                            from "../../model/user";
import {UserDetails}                     from "../../model/userDetails";

@Component({
    selector: 'user-details-table',
    templateUrl: 'app/components/user-details-table/user-details-table.component.html',
    styleUrls: ['app/components/user-details-table/user-details-table.component.css'],
})

export class UserDetailsTableComponent implements OnInit {
    title = 'User Details Table';
    @Input('user')
    user: User;
    // userDetails : UserDetails;

    userDetails : UserDetails = {
        uuid:"AAA111",
        achievements:[
            {id:"12345", from:"bill", to:"bill", sendDate:1234567, point:1, description:"daily report",
                type:"DAILY"},
            {id:"23456", from:"john", to:"bill", sendDate:1234567, point:5, description:"codenjoy winner",
                type:"CODENJOY"}]
        };

    constructor(private gamificationService: GamificationService) {}

    ngOnInit(): void {
    }
}