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
var inventories_service_1 = require("../services/inventories.service");
var editModalComponent = (function () {
    function editModalComponent(inventoriesService) {
        this.inventoriesService = inventoriesService;
        this.submitted = false;
    }
    editModalComponent.prototype.saveChanges = function (value) {
        this.submitted = true;
        this.inventoriesService.updateInventory(value).subscribe(function (data) {
            console.log(data);
            $('#editModal').modal('hide');
            window.location.reload();
        });
    };
    return editModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], editModalComponent.prototype, "inventory", void 0);
editModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'editModal-cmp',
        templateUrl: 'editModal.html'
    }),
    __metadata("design:paramtypes", [inventories_service_1.InventoriesService])
], editModalComponent);
exports.editModalComponent = editModalComponent;
