import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http'; 

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home';
import { LoginComponent } from './login/login';
import { headerComponent } from './header/header';
import { HeaderLogoutComponent } from './headerLogout/headerLogout';
import { InventoryComponent } from './inventory/inventory';
import { BannerComponent } from './banner/banner';
import { SideNavComponent } from './sideNav/sideNav';
import { BouncesComponent } from './bounces/bounces';
import { PopcornComponent } from './popcorn/popcorn';
import { SnowConesComponent } from './snowCones/snowCones';
import { CottonCandyComponent } from './cottonCandy/cottonCandy';
import { addModalComponent } from './addModal/addModal';
import { editModalComponent } from './editModal/editModal';
import { deleteModalComponent } from './deleteModal/deleteModal';
import { addEmployeeModalComponent } from './addEmployeeModal/addEmployeeModal';
import { employeeTableComponent } from './employeeTable/employeeTable'; 
import { UsersService } from './services/users.service';
import { InventoriesService } from './services/inventories.service';

import { AgmCoreModule } from 'angular2-google-maps/core';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bounces', component: BouncesComponent },
  { path: 'popcorn', component: PopcornComponent },
  { path: 'snowCones', component: SnowConesComponent },
  { path: 'cottonCandy', component: CottonCandyComponent },
  { path: 'inventory', component: InventoryComponent }
];

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDCr2_3X_DxJADKn21Qq4VvPAN970ADHrI'
    // })
  ],
  declarations: [ 
    AppComponent,       
    LoginComponent, 
    headerComponent,    
    BannerComponent,    
    SideNavComponent,
    HomeComponent,
    BouncesComponent,
    PopcornComponent,
    SnowConesComponent,
    CottonCandyComponent,
    addEmployeeModalComponent,
    HeaderLogoutComponent,
    addModalComponent,
    editModalComponent, 
    deleteModalComponent,
    employeeTableComponent,
    InventoryComponent
  ],
  providers: [
    UsersService,
    InventoriesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}