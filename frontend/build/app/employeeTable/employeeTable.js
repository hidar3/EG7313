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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var users_service_1 = require("../services/users.service");
var employeeTableComponent = (function () {
    function employeeTableComponent(usersService) {
        this.usersService = usersService;
        //employees: any[];
        this.employees = [];
    }
    employeeTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getUsers().subscribe(function (data) {
            _this.employees = data.objects;
            console.log(data);
            console.log(data.objects);
        });
    };
    return employeeTableComponent;
}());
employeeTableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'employeeTable-cmp',
        templateUrl: 'employeeTable.html'
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], employeeTableComponent);
exports.employeeTableComponent = employeeTableComponent;
