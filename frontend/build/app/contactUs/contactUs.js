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
var forms_1 = require("@angular/forms");
var post_service_1 = require("../services/post.service");
var contactUsComponent = (function () {
    function contactUsComponent(fb, postService) {
        this.fb = fb;
        this.postService = postService;
        this.name = 'contactUsComponent';
    }
    contactUsComponent.prototype.ngOnInit = function () {
        this.frmContact = this.fb.group({
            name: ['', forms_1.Validators.required],
            content: ['', forms_1.Validators.required]
        });
    };
    contactUsComponent.prototype.onSubmit = function () {
        var _this = this;
        var formValue = this.frmContact.value;
        // cool stuff to transform form value
        // call AJAX
        this._sub = this.postService.saveContact(formValue)
            .subscribe(function (data) {
            console.log(data);
            _this.res = data;
        });
    };
    contactUsComponent.prototype.ngOnDestroy = function () {
        // clean subscription when component destroy
        if (this._sub) {
            this._sub.unsubscribe();
        }
    };
    return contactUsComponent;
}());
contactUsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contactUs-cmp',
        templateUrl: 'contactUs.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, post_service_1.PostService])
], contactUsComponent);
exports.contactUsComponent = contactUsComponent;
