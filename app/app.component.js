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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Welcome to Angular2 App..!! ";
        this.showElement = true;
        this.color = 'yellow';
        this.arrays = ['Satish', 'Sravan', 'Ramana'];
    }
    AppComponent.prototype.onClick = function (value) {
        alert('button clicked..!! ' + value);
        console.log('button clicked ' + value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n  \t\t\t\t<h1>{{title}}</h1>\n  \t\t\t\t<div>\n\t\t\t\tFirstname: <input type=\"text\" #demoinput [(ngModel)]=\"fname\"> <br/><br/>\n\t\t\t\tLastname: <input type=\"text\" #demoinput [(ngModel)]=\"lname\"><br/><br/>\n\t\t\t\t<button (click)=\"onClick(demoinput.value)\">Click</button>\n\t\t\t\t<h3 *ngIf=\"showElement\">Full Name: {{fname}} {{lname}}</h3>\n\t\t\t\t</div>\n\t\t\t\t<div [ngSwitch]='color'>\n\t\t\t\t\t<p *ngSwitchWhen=\"'blue'\">Blue will be print on screen</p>\n\t\t\t\t\t<p *ngSwitchWhen=\"'green'\">Green color will be print on screen</p>\n\t\t\t\t\t<p *ngSwitchDefault>Invalid Color</p>\n\t\t\t\t</div>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor =\"let array1 of arrays\">{{array1}}</li>\n\t\t\t\t</ul>\n\t\t\n  \t\t\t</div>\n\t\t\t\t",
            styles: ["\n\t\t\t\th3{\n\t\t\t\t\tcolor:#998fbf;\n\t\t\t\t}\n  \t\t\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map