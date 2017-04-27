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
var router_1 = require("@angular/router");
var addModal_form_1 = require("./addModal.form");
var inventories_service_1 = require("../services/inventories.service");
var addModalComponent = (function () {
    function addModalComponent(inventoriesService, router) {
        this.inventoriesService = inventoriesService;
        this.router = router;
        this.inventory = new addModal_form_1.addModalForm('', '', '', '');
        this.submitted = false;
    }
    addModalComponent.prototype.addSubmit = function (value) {
        this.submitted = true;
        this.inventoriesService.addInventory(value).subscribe(function (data) {
            console.log(data);
            $('#addEmployeeModal').modal('hide');
            window.location.reload();
        });
    };
    return addModalComponent;
}());
addModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'addModal-cmp',
        templateUrl: 'addModal.html'
    }),
    __metadata("design:paramtypes", [inventories_service_1.InventoriesService, router_1.Router])
], addModalComponent);
exports.addModalComponent = addModalComponent;
