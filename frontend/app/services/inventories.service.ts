import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class InventoriesService {
       
    url: string = '/api/v1/users';

    constructor(private http: Http) {}

    //add a user
    addInventory(value: any){
        this.http.post(this.url, value);
        console.log(value);
    }



}