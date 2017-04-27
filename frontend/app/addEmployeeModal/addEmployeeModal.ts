import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { addEmployeeModalForm } from './addEmployeeModal.form';
import { UsersService } from '../services/users.service';

@Component({
  moduleId: module.id,
  selector: 'addEmployeeModal-cmp',
  templateUrl: 'addEmployeeModal.html'
})
export class addEmployeeModalComponent { 
  employee = new addEmployeeModalForm('', '', '');
  submitted = false;

constructor(private usersService: UsersService, private router: Router) {}

  addEmployeeSubmit(value: any){
    this.submitted = true;

    this.usersService.addUser(value).subscribe(data => {
      console.log(data);
     $('#addEmployeeModal').modal('hide');
     window.location.reload();
     //this.router.navigateByUrl('');
    });
  }

}