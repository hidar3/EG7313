"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var home_1 = require("./home/home");
var login_1 = require("./login/login");
var signUpForm_1 = require("./signUpForm/signUpForm");
var header_1 = require("./header/header");
var headerLogout_1 = require("./headerLogout/headerLogout");
var inventory_1 = require("./inventory/inventory");
var banner_1 = require("./banner/banner");
var sideNav_1 = require("./sideNav/sideNav");
var bounces_1 = require("./bounces/bounces");
var addModal_1 = require("./addModal/addModal");
var editModal_1 = require("./editModal/editModal");
var deleteModal_1 = require("./deleteModal/deleteModal");
var addEmployeeModal_1 = require("./addEmployeeModal/addEmployeeModal");
var appRoutes = [
    { path: '', component: home_1.HomeComponent },
    { path: 'login', component: login_1.LoginComponent },
    { path: 'signUpForm', component: signUpForm_1.signUpFormComponent },
    { path: 'inventory', component: inventory_1.InventoryComponent },
    { path: 'header', component: header_1.headerComponent },
    { path: 'headerLogout', component: headerLogout_1.HeaderLogoutComponent },
    { path: 'banner', component: banner_1.BannerComponent },
    { path: 'sideNav', component: sideNav_1.SideNavComponent },
    { path: 'bounces', component: bounces_1.BouncesComponent },
    { path: 'addModal', component: addModal_1.addModalComponent },
    { path: 'editModal', component: editModal_1.editModalComponent },
    { path: 'deleteModal', component: deleteModal_1.deleteModalComponent },
    { path: 'addEmployeeModal', component: addEmployeeModal_1.addEmployeeModalComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes),
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_1.HomeComponent,
            login_1.LoginComponent,
            signUpForm_1.signUpFormComponent,
            inventory_1.InventoryComponent,
            header_1.headerComponent,
            headerLogout_1.HeaderLogoutComponent,
            banner_1.BannerComponent,
            sideNav_1.SideNavComponent,
            bounces_1.BouncesComponent,
            addModal_1.addModalComponent,
            editModal_1.editModalComponent,
            deleteModal_1.deleteModalComponent,
            addEmployeeModal_1.addEmployeeModalComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
