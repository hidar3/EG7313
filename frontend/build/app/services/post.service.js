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
require("rxjs/add/operator/catch");
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
        this.API_ENDPOINT = '//jsonplaceholder.typicode.com/posts';
    }
    PostService.prototype.saveContact = function (contact) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // create new Headers object with header Content-Type is application/json.
        // headers.append('Authorization', 'Bearer ' + your_token); //JWT token
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.API_ENDPOINT, contact, options)
            .map(function (res) { return res.json(); });
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostService);
exports.PostService = PostService;
