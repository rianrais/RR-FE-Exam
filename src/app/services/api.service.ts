import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ApiService {

  UserList : object[];

  constructor(private http:Http) { 
     this.getData().subscribe( result => this.UserList = result);
  }
    
    getData(){
      return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(result => result.json() )
      .catch(error => Observable.throw(error.json().error) || "Server Error");
    }

  // addUserList(obj:object):object[]
  // {
  //   this.UserList.push(obj);
  //   return this.UserList;
  // }

  removeUserList(id:string):object[]
  {
    for (var i = 0; i < this.UserList.length; i++) {
      if (this.UserList[i]["id"] == id) {
        this.UserList.splice(i, 1);
        break;
      } 
    }
    return this.UserList;
  }
   
}
