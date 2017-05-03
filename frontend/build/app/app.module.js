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
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_1 = require("./home/home");
var login_1 = require("./login/login");
var header_1 = require("./header/header");
var headerLogout_1 = require("./headerLogout/headerLogout");
var headerLogout2_1 = require("./headerLogout2/headerLogout2");
var inventory_1 = require("./inventory/inventory");
var banner_1 = require("./banner/banner");
var sideNav_1 = require("./sideNav/sideNav");
var bounces_1 = require("./bounces/bounces");
var popcorn_1 = require("./popcorn/popcorn");
var snowCones_1 = require("./snowCones/snowCones");
var cottonCandy_1 = require("./cottonCandy/cottonCandy");
var tableschairs_1 = require("./tableschairs/tableschairs");
var location_1 = require("./location/location");
var contactUs_1 = require("./contactUs/contactUs");
var addModal_1 = require("./addModal/addModal");
var editModal_1 = require("./editModal/editModal");
var deleteModal_1 = require("./deleteModal/deleteModal");
var addEmployeeModal_1 = require("./addEmployeeModal/addEmployeeModal");
var employeeTable_1 = require("./employeeTable/employeeTable");
var users_service_1 = require("./services/users.service");
var inventories_service_1 = require("./services/inventories.service");
var auth_service_1 = require("./services/auth.service");
var footer_1 = require("./footer/footer");
var core_2 = require("angular2-google-maps/core");
var appRoutes = [
    { path: '', component: home_1.HomeComponent },
    { path: 'bounces', component: bounces_1.BouncesComponent },
    { path: 'popcorn', component: popcorn_1.PopcornComponent },
    { path: 'snowCones', component: snowCones_1.SnowConesComponent },
    { path: 'cottonCandy', component: cottonCandy_1.CottonCandyComponent },
    { path: 'tableschairs', component: tableschairs_1.TableschairsComponent },
    { path: 'location', component: location_1.LocationComponent },
    { path: 'contactUs', component: contactUs_1.contactUsComponent },
    { path: 'inventory', component: inventory_1.InventoryComponent },
    { path: 'employeeTable', component: employeeTable_1.employeeTableComponent },
    { path: 'footer', component: footer_1.FooterComponent }
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
            forms_1.FormsModule,
            http_1.HttpModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDCr2_3X_DxJADKn21Qq4VvPAN970ADHrI'
            })
        ],
        declarations: [
            app_component_1.AppComponent,
            login_1.LoginComponent,
            header_1.headerComponent,
            banner_1.BannerComponent,
            sideNav_1.SideNavComponent,
            home_1.HomeComponent,
            bounces_1.BouncesComponent,
            popcorn_1.PopcornComponent,
            snowCones_1.SnowConesComponent,
            cottonCandy_1.CottonCandyComponent,
            tableschairs_1.TableschairsComponent,
            location_1.LocationComponent,
            contactUs_1.contactUsComponent,
            addEmployeeModal_1.addEmployeeModalComponent,
            headerLogout_1.HeaderLogoutComponent,
            headerLogout2_1.HeaderLogout2Component,
            addModal_1.addModalComponent,
            editModal_1.editModalComponent,
            deleteModal_1.deleteModalComponent,
            employeeTable_1.employeeTableComponent,
            inventory_1.InventoryComponent,
            footer_1.FooterComponent
        ],
        providers: [
            users_service_1.UsersService,
            inventories_service_1.InventoriesService,
            auth_service_1.AuthService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
