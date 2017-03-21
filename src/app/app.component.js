"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Person = (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["UP_ARROW"] = 38] = "UP_ARROW";
    KEY_CODE[KEY_CODE["DOWN_ARROW"] = 40] = "DOWN_ARROW";
})(KEY_CODE = exports.KEY_CODE || (exports.KEY_CODE = {}));
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'Table';
        this.people = PEOPLE;
        this.key = '';
        this.counter = 0;
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
        this.setKey = function (th) {
            _this.counter === 2 ? _this.counter = 0 : _this.counter++;
            th === 'to' ? _this.key = 'to' : _this.key = 'point';
        };
    }
    AppComponent.prototype.keyEvent = function (event) {
        console.log(event);
        if (event.keyCode === KEY_CODE.UP_ARROW) {
            this.selectedPerson = this.people[--this.selectedIndex];
        }
        else if (event.keyCode === KEY_CODE.DOWN_ARROW) {
            this.selectedPerson = this.people[++this.selectedIndex];
        }
    };
    AppComponent.prototype.onSelect = function (person, i) {
        this.selectedPerson = person;
        this.selectedIndex = i;
    };
    return AppComponent;
}());
__decorate([
    core_1.HostListener('window:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "keyEvent", null);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>People</h2>\n    <table class=\"table table-bordered table-hover\">\n     <thead>\n       <tr>\n         <th>#</th> \n         <th class=\"col0\"></th>\n         <th class=\"col1\" (click)=\"setKey('to')\">ID</th>\n         <th class=\"col2\" (click)=\"setKey('point')\">\u0414\u0436\u0443\u0434\u0436\u0438\u043A\u0438</th>\n     </tr>\n     </thead>\n     <tbody>\n       <tr *ngFor=\"let person of people | sorting: key : counter; let i = index \"\n       [class.selected]=\"person === selectedPerson\"\n       (click)=\"onSelect(person, i)\"> \n         <td [id]=\"i+1\">{{i+1}}</td>\n         <td><input class=\"check\" type=\"checkbox\"/></td> \n         <td>{{person.to}}</td>\n         <td class=\"col2\">{{person.point}}</td>\n       </tr>\n     </tbody>\n    </table>\n  ",
        styles: ["\n    .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n    }\n    h1, h2 {\n    text-align: center;\n    }\n    table {\n    width: 340px;\n    margin: auto;\n    }\n    .col0 {\n    width: 40px;\n    }\n    .col1 {\n    width: 200px;\n    text-align: center;\n    }\n    .col2 {\n    width: 100px;\n    text-align: center;\n    }\n    .check {\n    margin: 4px;\n    }\n  "]
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