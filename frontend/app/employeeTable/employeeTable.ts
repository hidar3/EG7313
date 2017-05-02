import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  moduleId: module.id,
  selector: 'employeeTable-cmp',
  templateUrl: 'employeeTable.html'
})

export class employeeTableComponent implements OnInit { 
    //employees: any[];
    employees: any = [];
    employee: any = ''; //used for delete modal

    constructor(private usersService: UsersService){}
    ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
    this.employees= data.objects;
    console.log(data);
    console.log(data.objects);
    });
  }
  
  showDeleteEmployeeModal(employee: any) {
      this.employee = employee;
      $('#deleteEmployeeModal').modal("show");
    }    

    DeleteEmployee(value: any){
    this.usersService.deleteEmployee(value).subscribe(data => {
    console.log(data);
    $('#deleteEmployeeModal').modal('hide');
    window.location.reload();
    });
    }


}