import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; // needed for services

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home';
import { LoginComponent } from './login/login';
import { signUpFormComponent } from './signUpForm/signUpForm';
import { headerComponent } from './header/header';
import { HeaderLogoutComponent } from './headerLogout/headerLogout';
import { InventoryComponent } from './inventory/inventory';
import { BannerComponent } from './banner/banner';
import { SideNavComponent } from './sideNav/sideNav';
import { BouncesComponent } from './bounces/bounces';
import { addModalComponent } from './addModal/addModal';
import { editModalComponent } from './editModal/editModal';
import { deleteModalComponent } from './deleteModal/deleteModal';
import { addEmployeeModalComponent } from './addEmployeeModal/addEmployeeModal';
import { UsersService } from './services/users.service';




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUpForm', component: signUpFormComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'header', component: headerComponent },
  { path: 'headerLogout', component: HeaderLogoutComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'sideNav', component: SideNavComponent },
  { path: 'bounces', component: BouncesComponent },
  { path: 'addModal', component: addModalComponent },
  { path: 'editModal', component: editModalComponent },
  { path: 'deleteModal', component: deleteModalComponent },
  { path: 'addEmployeeModal', component: addEmployeeModalComponent }

  

];

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent,
    signUpFormComponent,
    InventoryComponent,
    headerComponent,
    HeaderLogoutComponent,
    BannerComponent,
    SideNavComponent,
    BouncesComponent,
    addModalComponent,
    editModalComponent,
    deleteModalComponent,
    addEmployeeModalComponent

  ],
  providers: [
    UsersService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}