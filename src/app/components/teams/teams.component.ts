import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TeamsService } from '../../service/teams.service';
import { UserService } from '../../service/user.service';
import { Team } from '../../model/team';
import { User } from '../../model/user';
import { UsersTeam } from "../../model/usersTeam";

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit{
  title: string;
  teams: Team[];
  usersTeams: Set<UsersTeam>;
  isLoaded: boolean;

  constructor(
    private teamsService: TeamsService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title = 'Teams';
    this.isLoaded = false;
    this.usersTeams = new Set();
    this.getTeams();
  }

  private getTeams(): void {
    this.teamsService.getTeams()
      .subscribe(
        (teams: Team[]) => {
          if (teams && teams.length) {
            this.teams = teams;
            this.getMembers();
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  getNameByUuid(team: Team): void {
    this.userService.getNameByUuid(this.getUuids(team))
      .subscribe(
        (users: User[]) => {
          this.usersTeams.add(new UsersTeam(users, team.activateDate, team.deactivateDate));
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  getMembers(): void {
    this.teams.forEach(team => this.getNameByUuid(team));
    this.isLoaded = true;
  }

  getUuids(team: Team): Set<string> {
    const uuids = new Set();
    team.members.forEach(member => uuids.add(member));
    return uuids;
  }

  goToDetail(uuid: string): void {
    this.router.navigate(['/user-details-table', uuid]);
  }
}
