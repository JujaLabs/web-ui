import {Component, HostListener, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {Person} from './person';

export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>People</h2>
    <table class="table table-bordered table-hover">
     <thead>
       <tr>
         <th>#</th> 
         <th class="col0"></th>
         <th class="col1" (click)="setKey('to')">ID</th>
         <th class="col2" (click)="setKey('point')">Джуджики</th>
     </tr>
     </thead>
     <tbody>
       <tr *ngFor="let person of people | sorting: key : counter; let i = index "
       [class.selected]="person === selectedPerson"
       (click)="onSelect(person, i)"> 
         <td>{{i+1}}</td>
         <td><input class="check" type="checkbox"/></td> 
         <td>{{person.to}}</td>
         <td class="col2">{{person.point}}</td>
       </tr>
     </tbody>
    </table>
  `,
  styles: [`
    .selected {
    background-color: #CFD8DC !important;
    color: white;
    }
    h1, h2 {
    text-align: center;
    }
    table {
    width: 340px;
    margin: auto;
    }
    .col0 {
    width: 40px;
    }
    .col1 {
    width: 200px;
    text-align: center;
    }
    .col2 {
    width: 100px;
    text-align: center;
    }
    .check {
    margin: 4px;
    }
  `],
  providers: [HttpService]
})

export class AppComponent implements OnInit{
  title = 'Table';
  people: Person[];
  key = '';
  counter = 0;
  selectedPerson: Person;
  selectedIndex: number;

  constructor(private httpService: HttpService){}

  getData(): void {
    this.httpService
      .getData()
      .then(people => this.people = people);
    console.log(this.people);
  }

  ngOnInit(): void {
    this.getData();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode === KEY_CODE.UP_ARROW){
      this.selectedPerson = this.people[--this.selectedIndex];
    } else
      if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.selectedPerson = this.people[++this.selectedIndex];
    }
  }

  onSelect(person: Person, i: number): void {
    this.selectedPerson = person;
    this.selectedIndex = i
  }

 /* scroll(event: KeyboardEvent) {
    //up 38 down 40
    event.preventDefault();
    if (event.keyCode === 40) {
      this.selectedPerson = this.people[++this.selectedIndex];
    } else if (event.keyCode === 38) {
      this.selectedPerson = this.people[--this.selectedIndex];
    } else return;
  }*/

/*  isSelected(person: Person) {
    return this.selectedPerson ?
      this.selectedPerson === person : false;
  }*/


  setKey = (th: any) => {
    this.counter === 2 ? this.counter = 0 : this.counter++;
    th === 'to' ? this.key = 'to' : this.key = 'point';
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
