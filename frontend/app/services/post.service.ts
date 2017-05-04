import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {
  private API_ENDPOINT = '//jsonplaceholder.typicode.com/posts';
  constructor(private _http: Http) {}
  
  saveContact(contact: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // create new Headers object with header Content-Type is application/json.
    // headers.append('Authorization', 'Bearer ' + your_token); //JWT token
    let options = new RequestOptions({ headers: headers });
    
    return this._http.post(this.API_ENDPOINT, contact, options)
      .map(res => res.json());
  }
}