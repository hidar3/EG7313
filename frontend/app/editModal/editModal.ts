import { Component, Input } from '@angular/core';
import { editModalForm } from './editModal.form';
import { InventoriesService } from '../services/inventories.service';

@Component({
  moduleId: module.id,
  selector: 'editModal-cmp',
  templateUrl: 'editModal.html'
})
export class editModalComponent { 
  submitted = false;

  @Input() inventory: any;

    constructor(private inventoriesService: InventoriesService){}

  saveChanges(value: any){
    this.submitted = true;
    this.inventoriesService.updateInventory(value).subscribe(data => {
    console.log(data);
    $('#editModal').modal('hide');
    window.location.reload();
  });
  }
}