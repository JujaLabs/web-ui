import { Component, OnInit } from '@angular/core';

import { KeepersService } from '../../service/keepers.service';
import { ActiveKeepers } from '../../model/activeKeepers';

@Component({
  selector: 'active-keepers',
  templateUrl: './active-keepers.component.html',
  styleUrls: ['./active-keepers.component.css']
})
export class ActiveKeepersComponent implements OnInit{
  activeKeepers: ActiveKeepers[];
  isLoaded: boolean;

  constructor(
    private keepersService: KeepersService
  ) { }

  ngOnInit(): void {
    this.isLoaded = false;
    this.getActiveKeepers();
  }

  private getActiveKeepers(): void {
      this.keepersService.getActiveKeepers()
      .subscribe(
        (activeKeepers: ActiveKeepers[]) => {
          if (activeKeepers && activeKeepers.length) {
            console.log(activeKeepers);
            this.activeKeepers = activeKeepers;
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    this.isLoaded = true;
  }
}
