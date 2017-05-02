"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LocationComponent = (function () {
    function LocationComponent() {
        this.title = "Leo's Party Rental location";
        this.lat = 29.448831;
        this.lng = -98.588485;
    }
    return LocationComponent;
}());
LocationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'location-cmp',
        templateUrl: 'location.html'
    })
], LocationComponent);
exports.LocationComponent = LocationComponent;
