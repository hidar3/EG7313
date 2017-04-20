import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InventoriesService {
       
    url: string = '/api/v1/inventories';

    constructor(private http: Http) {}

    //add a user
    addInventory(value: any){
        let valueString = JSON.stringify(value);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, valueString, options).map(res => res.json());
    }



}