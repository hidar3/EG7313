import { Component, OnInit } from '@angular/core';
import { InventoriesService } from '../services/inventories.service';

@Component({
  moduleId: module.id,
  selector: 'inventory-cmp',
  templateUrl: 'inventory.html'
})

export class InventoryComponent implements OnInit { 
    inventories: any = [];
    inventory: any = ''; //used for edit modal

    constructor(private inventoriesService: InventoriesService) {}

    ngOnInit() {
      this.inventoriesService.getInventories().subscribe(data => {
        this.inventories= data.objects;
        console.log(data);
        console.log(data.objects);
      });
    }

    //showeditModal function to show editModal form in editModal.html
    showeditModal(inventory: any) {
      this.inventory = inventory;
      $('#editModal').modal("show");
    }    

    saveChanges(value: any){
    this.inventoriesService.updateInventory(value).subscribe(data => {
    console.log(data);
    $('#editModal').modal('hide');
    window.location.reload();
  });
}

    showDeleteModal(inventory: any) {
      this.inventory = inventory;
      $('#deleteModal').modal("show");
    }    

    DeleteInventory(value: any){
    this.inventoriesService.deleteInventory(value).subscribe(data => {
    console.log(data);
    $('#deleteModal').modal('hide');
    window.location.reload();
    });
    }

}