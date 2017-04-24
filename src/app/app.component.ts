import {Component, HostListener, OnInit} from '@angular/core';
import { HttpService}                    from './http.service';
import {Person}                          from './person';

export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
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
