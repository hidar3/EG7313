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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var InventoriesService = (function () {
    function InventoriesService(http) {
        this.http = http;
        this.url = '/api/v1/inventories';
    }
    //add a user
    InventoriesService.prototype.addInventory = function (value) {
        var valueString = JSON.stringify(value);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.url, valueString, options).map(function (res) { return res.json(); });
    };
    InventoriesService.prototype.getInventories = function () {
        return this.http.get(this.url).map(function (res) { return res.json(); }); //converts observable into JSON file format
    };
    InventoriesService.prototype.updateInventory = function (value) {
        var valueString = JSON.stringify(value);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.url + "/" + value.id, valueString, options).map(function (res) { return res.json(); });
    };
    InventoriesService.prototype.deleteInventory = function (value) {
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: header });
        return this.http.delete(this.url + "/" + value.id, options).map(function (res) { return res.json(); });
    };
    return InventoriesService;
}());
InventoriesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], InventoriesService);
exports.InventoriesService = InventoriesService;
