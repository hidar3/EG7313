import { Component } from '@angular/core';

import { loginForm } from './login.form';
import { UsersService } from '../services/users.service';

@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: 'login.html'
})
export class LoginComponent { 
  employee = new loginForm('', '');
  submitted = false;

constructor(private usersService: UsersService) {}

  loginSubmit(value: any){
    this.submitted = true;

    this.usersService.loginUser(value);

  }

}