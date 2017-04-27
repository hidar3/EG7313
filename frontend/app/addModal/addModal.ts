import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { addModalForm } from './addModal.form';
import { InventoriesService } from '../services/inventories.service';

@Component({
  moduleId: module.id,
  selector: 'addModal-cmp',
  templateUrl: 'addModal.html'
})
export class addModalComponent { 
  inventory = new addModalForm('','','','');
  submitted = false;

constructor(private inventoriesService: InventoriesService, private router: Router) {}

  addSubmit(value: any){
    this.submitted = true;
    this.inventoriesService.addInventory(value).subscribe(data => {
    console.log(data);
    $('#addEmployeeModal').modal('hide');
    window.location.reload();

  });
  
  }

}