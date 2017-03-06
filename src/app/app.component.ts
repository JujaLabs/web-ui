import { Component } from '@angular/core';

export class Person {        //объявили класс Hero и типы переменных
  to: string;
  point: number;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>People</h2>
    <table class="table table-bordered table-hover">
     <thead>
       <tr>
       <th class="col1">ID</th>
       <th class="col2">Джуджики</th>
     </tr>
     </thead>
     <tbody>
       <tr *ngFor="let person of people | sortingString:'to' :false ">
       <td>{{person.to}}</td>
       <td class="col2">{{person.point}}</td>
       </tr>
     </tbody>
    </table>
  `,
  styles: [`
    table {
    width: 300px;
    }
    .col1 {
    width: 200px;
    text-align: center;
    }
    .col2 {
    width: 100px;
    text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'Table';
  people = PEOPLE;
}

const PEOPLE: Person[] = [             //массив HEROES типа Hero
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
];
