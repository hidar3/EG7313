import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UsersService {
       
    url: string = '/api/v1/users';

    constructor(private http: Http) {}

    //add a user
    addUser(value: any){
        this.http.post(this.url, value);
        console.log(value);
    }

    //login a user
    loginUser(value: any){
        this.http.post(this.url, value);
        console.log(value);
    }


}