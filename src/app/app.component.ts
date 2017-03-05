import { Component } from '@angular/core';

export class Person {        //объявили класс Hero и типы переменных
  id: string;
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
       <tr *ngFor="let person of people | sortingString:'id' :false ">
       <td>{{person.id}}</td>
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
  { id: '@roman.p', point: 75 },
  { id: '@alena', point: 7 },
  { id: '@alexander.adel', point: 60 },
  { id: '@alexander.baglay', point: 139 },
  { id: '@olena.barabach', point: 176 },
  { id: '@andriy.popovich', point: 0 },
  { id: '@artem.burlaka', point: 115 },
  { id: '@denys.melnychenko', point: 200 },
  { id: '@evgene.podolyako', point: 32 },
  { id: '@dmytro.boyko', point: 23 },
  { id: '@dmytro.maliyarenko', point: 74 },
  { id: '@denis.mulyar', point: 103 },
  { id: '@dmytro.lytvynenko', point: 89 },
  { id: '@tygay.andrey', point: 0 },
  { id: '@aleksandra.viedina', point: 24 },
  { id: '@alexander.vlasov', point: 100 },
  { id: '@valentin.opanasyuk', point: 72 }
];
