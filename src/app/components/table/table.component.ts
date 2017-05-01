import {Component, HostListener, OnInit} from '@angular/core';
import { GamificationService}                    from '../../service/gamification.service';
import {User}                          from '../../model/user';

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
    users: User[] = [];
    key = '';
    counter = 0;
    selectedUser: User;
    selectedIndex: number;

    constructor(private gamificationService: GamificationService){}

    ngOnInit(): void {
        this.getPointSumForAllUsers();
    }

    private getPointSumForAllUsers() {
        this.gamificationService.getPointSumForAllUsers().subscribe(data => {
            this.users = data;
        });
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        console.log(event);
        if (event.keyCode === KEY_CODE.UP_ARROW){
            this.selectedUser = this.users[--this.selectedIndex];
        } else
        if (event.keyCode === KEY_CODE.DOWN_ARROW) {
            this.selectedUser = this.users[++this.selectedIndex];
        }
    }

    onSelect(user: User, i: number): void {
        this.selectedUser = user;
        this.selectedIndex = i
    }

    setKey = (th: any) => {
        this.counter === 2 ? this.counter = 0 : this.counter++;
        th === 'uid' ? this.key = 'uid' : this.key = 'point';
    };
}

/*const PEOPLE: Person[] = [
 { to: '@roman.p', point: 75 },
 { to: '@alena', point: 7 },
 { to: '@alexander.a', point: 60 },
 { to: '@alexander.b', point: 139 },
 { to: '@olena.b', point: 176 },
 { to: '@andriy.p', point: 0 },
 { to: '@artem.b', point: 115 },
 { to: '@denys.m', point: 200 },
 { to: '@evgene.p', point: 32 },
 { to: '@dmytro.b', point: 23 },
 { to: '@dmytro.m', point: 74 },
 { to: '@denis.m', point: 103 },
 { to: '@dmytro.l', point: 89 },
 { to: '@andrey.t', point: 0 },
 { to: '@aleksandra.v', point: 24 },
 { to: '@alexander.v', point: 100 },
 { to: '@valentin.o', point: 72 }
 ];*/
