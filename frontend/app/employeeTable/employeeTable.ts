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

    constructor(private usersService: UsersService){}
    ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
    this.employees= data.objects;
    console.log(data);
    console.log(data.objects);
    });
    }
}