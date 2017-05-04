import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http'; 

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home';
import { LoginComponent } from './login/login';
import { headerComponent } from './header/header';
import { HeaderLogoutComponent } from './headerLogout/headerLogout';
import { HeaderLogout2Component } from './headerLogout2/headerLogout2';
import { InventoryComponent } from './inventory/inventory';
import { BannerComponent } from './banner/banner';
import { SideNavComponent } from './sideNav/sideNav';
import { BouncesComponent } from './bounces/bounces';
import { PopcornComponent } from './popcorn/popcorn';
import { SnowConesComponent } from './snowCones/snowCones';
import { CottonCandyComponent } from './cottonCandy/cottonCandy';
import { TableschairsComponent } from './tableschairs/tableschairs';
import { LocationComponent } from './location/location';
import { contactUsComponent } from './contactUs/contactUs';
import { addModalComponent } from './addModal/addModal';
import { editModalComponent } from './editModal/editModal';
import { deleteModalComponent } from './deleteModal/deleteModal';
import { addEmployeeModalComponent } from './addEmployeeModal/addEmployeeModal';
import { employeeTableComponent } from './employeeTable/employeeTable'; 
import { UsersService } from './services/users.service';
import { InventoriesService } from './services/inventories.service';
import { AuthService } from './services/auth.service';

import { FooterComponent } from './footer/footer';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { PostService } from './services/post.service';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bounces', component: BouncesComponent },
  { path: 'popcorn', component: PopcornComponent },
  { path: 'snowCones', component: SnowConesComponent },
  { path: 'cottonCandy', component: CottonCandyComponent },
  { path: 'tableschairs', component: TableschairsComponent },
  { path: 'location', component: LocationComponent },
  { path: 'contactUs', component: contactUsComponent },  
  { path: 'inventory', component: InventoryComponent },
  { path: 'employeeTable', component: employeeTableComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCr2_3X_DxJADKn21Qq4VvPAN970ADHrI'
    })
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
    TableschairsComponent,
    LocationComponent,
    contactUsComponent,
    addEmployeeModalComponent,
    HeaderLogoutComponent,
    HeaderLogout2Component,
    addModalComponent,
    editModalComponent, 
    deleteModalComponent,
    employeeTableComponent,
    InventoryComponent,
    FooterComponent
  ],
  providers: [
    UsersService,
    InventoriesService,
    AuthService,
    PostService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}