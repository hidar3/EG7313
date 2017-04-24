import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  moduleId: module.id,
  selector: 'employeeTable-cmp',
  templateUrl: 'employeeTable.html'
})

export class employeeTableComponent implements OnInit { 
    users = [];

    constructor(private userServices: UsersService){}
    ngOnInit(){
      this.userServices.getUsers()
      .subscribe(resUserData => this.users = resUserData);
    }
}