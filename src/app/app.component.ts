import { Component } from '@angular/core';

export class Person {
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
       <th class="col1" (click)="setKey('to')">ID</th>
       <th class="col2" (click)="setKey('point')">Джуджики</th>
     </tr>
     </thead>
     <tbody>
       <tr *ngFor="let person of people | sorting: key : counter ">
       <td>{{person.to}}</td>
       <td class="col2">{{person.point}}</td>
       </tr>
     </tbody>
    </table>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    h1, h2 {
    text-align: center;
    }
    table {
    width: 300px;
    margin: auto;
    }
    .col1 {
    width: 200px;
    text-align: center;
    }
    .col2 {
    width: 100px;
    text-align: center;
    }
    nav {
    text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'Table';
  people = PEOPLE;
  key = '';
  counter = 0;

  setKey = (th: any) => {
    this.counter === 2 ? this.counter = 0 : this.counter++;
    th === 'to' ? this.key = 'to' : this.key = 'point';
  }
}

const PEOPLE: Person[] = [
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
