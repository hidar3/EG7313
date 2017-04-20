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
var addEmployeeModal_form_1 = require("./addEmployeeModal.form");
var users_service_1 = require("../services/users.service");
var addEmployeeModalComponent = (function () {
    function addEmployeeModalComponent(usersService) {
        this.usersService = usersService;
        this.employee = new addEmployeeModal_form_1.addEmployeeModalForm('', '', '');
        this.submitted = false;
    }
    addEmployeeModalComponent.prototype.addEmployeeSubmit = function (value) {
        this.submitted = true;
        this.usersService.addUser(value).subscribe(function (data) {
            console.log(data);
        });
    };
    return addEmployeeModalComponent;
}());
addEmployeeModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'addEmployeeModal-cmp',
        templateUrl: 'addEmployeeModal.html'
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], addEmployeeModalComponent);
exports.addEmployeeModalComponent = addEmployeeModalComponent;
