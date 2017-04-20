import { Component } from '@angular/core';

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

constructor(private usersService: UsersService) {}

  addEmployeeSubmit(value: any){
    this.submitted = true;

    this.usersService.addUser(value).subscribe(data => {
      console.log(data);
    });
  }

}