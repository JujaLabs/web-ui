"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Person = (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'Table';
        this.people = PEOPLE;
        this.key = '';
        this.counter = 0;
        this.setKey = function (th) {
            _this.counter === 2 ? _this.counter = 0 : _this.counter++;
            th === 'to' ? _this.key = 'to' : _this.key = 'point';
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>People</h2>\n    <table class=\"table table-bordered table-hover\">\n     <thead>\n       <tr>\n       <th class=\"col1\" (click)=\"setKey('to')\">ID</th>\n       <th class=\"col2\" (click)=\"setKey('point')\">\u0414\u0436\u0443\u0434\u0436\u0438\u043A\u0438</th>\n     </tr>\n     </thead>\n     <tbody>\n       <tr *ngFor=\"let person of people | sorting: key : counter \">\n       <td>{{person.to}}</td>\n       <td class=\"col2\">{{person.point}}</td>\n       </tr>\n     </tbody>\n    </table>\n    <nav aria-label=\"Page navigation\">\n      <ul class=\"pagination\">\n        <li>\n          <a href=\"#\" aria-label=\"Previous\">\n            <span aria-hidden=\"true\">&laquo;</span>\n          </a>\n        </li>\n        <li><a href=\"#\">1</a></li>\n        <li><a href=\"#\">2</a></li>\n        <li><a href=\"#\">3</a></li>\n        <li><a href=\"#\">4</a></li>\n        <li><a href=\"#\">5</a></li>\n        <li>\n          <a href=\"#\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&raquo;</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n  ",
        styles: ["\n    h1, h2 {\n    text-align: center;\n    }\n    table {\n    width: 300px;\n    margin: auto;\n    }\n    .col1 {\n    width: 200px;\n    text-align: center;\n    }\n    .col2 {\n    width: 100px;\n    text-align: center;\n    }\n    nav {\n    text-align: center;\n    }\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
var PEOPLE = [
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
//# sourceMappingURL=app.component.js.map