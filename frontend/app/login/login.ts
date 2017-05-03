import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { loginForm } from './login.form';
import { AuthService } from '../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: 'login.html'
})
export class LoginComponent { 
  employee = new loginForm('', '');

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  loginSubmit(value: any) {
    this.authService.authenticate(value).subscribe(data => {
        if (data = 'Success') {
          this.router.navigateByUrl('inventory');
        }        
    });
  }

}