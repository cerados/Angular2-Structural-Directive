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
var MyComponent = (function () {
    function MyComponent() {
        this.title = 'Structural Directives';
        this.names = [
            { name: "Kamal" },
            { name: "Mitchel" },
            { name: "Yoon" },
            { name: "Johnson" },
            { name: "Jet Li" }
        ];
        this.selectedName = { name: "" };
    }
    MyComponent.prototype.onNameClicked = function (nam) {
        this.selectedName = nam;
    };
    MyComponent.prototype.onAddName = function (nam) {
        this.names.push({ name: nam.value });
    };
    MyComponent.prototype.onDeleteName = function () {
        this.names.splice(this.names.indexOf(this.selectedName), 1);
        this.selectedName.name = "";
    };
    MyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-comp',
            templateUrl: 'my-component.component'
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=my-component.component.js.map