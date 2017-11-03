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
var MyAttritubeComponent = (function () {
    function MyAttritubeComponent() {
        this.title = "Welcome to Attritubes Directive";
        this.cone = true;
        this.ctwo = true;
    }
    MyAttritubeComponent.prototype.toggle = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    ;
    MyAttritubeComponent = __decorate([
        core_1.Component({
            selector: 'my-attritube',
            template: "<div>\n\t\t\t\t\t<h1>{{title}}</h1>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p>working this component</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>",
            styles: [""]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAttritubeComponent);
    return MyAttritubeComponent;
}());
exports.MyAttritubeComponent = MyAttritubeComponent;
//# sourceMappingURL=attritube.component.js.map