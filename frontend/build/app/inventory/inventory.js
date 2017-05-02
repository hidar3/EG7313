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
var InventoryComponent = (function () {
    function InventoryComponent(inventoriesService) {
        this.inventoriesService = inventoriesService;
        this.inventories = [];
        this.inventory = ''; //used for edit modal
    }
    InventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inventoriesService.getInventories().subscribe(function (data) {
            _this.inventories = data.objects;
            console.log(data);
            console.log(data.objects);
        });
    };
    //showeditModal function to show editModal form in editModal.html
    InventoryComponent.prototype.showeditModal = function (inventory) {
        this.inventory = inventory;
        $('#editModal').modal("show");
    };
    InventoryComponent.prototype.saveChanges = function (value) {
        this.inventoriesService.updateInventory(value).subscribe(function (data) {
            console.log(data);
            $('#editModal').modal('hide');
            window.location.reload();
        });
    };
    InventoryComponent.prototype.showDeleteModal = function (inventory) {
        this.inventory = inventory;
        $('#deleteModal').modal("show");
    };
    InventoryComponent.prototype.DeleteInventory = function (value) {
        this.inventoriesService.deleteInventory(value).subscribe(function (data) {
            console.log(data);
            $('#deleteModal').modal('hide');
            window.location.reload();
        });
    };
    return InventoryComponent;
}());
InventoryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'inventory-cmp',
        templateUrl: 'inventory.html'
    }),
    __metadata("design:paramtypes", [inventories_service_1.InventoriesService])
], InventoryComponent);
exports.InventoryComponent = InventoryComponent;
