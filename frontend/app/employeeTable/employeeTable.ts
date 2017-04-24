import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  moduleId: module.id,
  selector: 'employeeTable-cmp',
  templateUrl: 'employeeTable.html'
})

export class employeeTableComponent implements OnInit { 
    //employees: any[];
    employees = ['','', '',''];

    constructor(private userServices: UsersService){}
    ngOnInit(){
      this.userServices.getUsers()
      .subscribe(resUserData => this.employees = resUserData);
    }
}