import { Component } from '@angular/core';
import { addEmployeeModalForm } from './addEmployeeModal.form';

@Component({
  moduleId: module.id,
  selector: 'addEmployeeModal-cmp',
  templateUrl: 'addEmployeeModal.html'
})
export class addEmployeeModalComponent { 
  name = 'addEmployeeModalComponent'; 

  employee = new addEmployeeModalForm('', '', '');
  submitted = false;
  addEmployeeSubmit(value: any){
    console.log(value);
    this.submitted = true;
  }

}