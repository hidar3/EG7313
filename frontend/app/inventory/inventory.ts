//**********************************/

import { Component, OnInit } from '@angular/core';
import { InventoriesService } from '../services/inventories.service';


@Component({
  moduleId: module.id,
  selector: 'inventory-cmp',
  templateUrl: 'inventory.html'
})

export class InventoryComponent implements OnInit { 
    inventories: any = [];

    constructor(private inventoriesService: InventoriesService){}
    ngOnInit() {
    this.inventoriesService.getInventories().subscribe(data => {
    this.inventories= data.objects;
    console.log(data);
    console.log(data.objects);
    });
    }
}