import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TeamsService } from '../../service/teams.service';
import { Team } from '../../model/team';

@Component({
  selector: 'active-keepers',
  templateUrl: './active-keepers.component.html',
  styleUrls: ['./active-keepers.component.css']
})
export class TeamsComponent implements OnInit{
  title: string;
  teams: Team[];

  constructor(
    private teamsService: TeamsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title = 'Teams';
    this.getTeams();
  }

  private getTeams(): void {
    this.teamsService.getTeams()
      .subscribe(
        (teams: Team[]) => {
          if (teams && teams.length) {
            this.teams = teams;
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
