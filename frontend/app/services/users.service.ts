import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
       
    private url: string = '/api/v1/users';

    constructor(private http: Http) {}

    //add a user
    addUser(value: any){
        let valueString = JSON.stringify(value);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
console.log("The value has been returned.");
        return this.http.post(this.url, valueString, options).map(res => res.json());
    }

    getUsers(){
        return this.http.get(this.url)
            .map((response:Response) => response.json()); //converts observable into JSON file format

    }


    //login a user
    loginUser(value: any){
        // this.http.post(this.url, value);
        // console.log(value);
    }


}