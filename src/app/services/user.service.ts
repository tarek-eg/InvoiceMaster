import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "./user";

@Injectable()
export class UserService {

  private _getUrl = '/api/users';
  private _postUrl = '/api/user';
  private _puttUrl = '/api/user/';
  private _deletetUrl = '/api/user/';
   
  constructor(private _http: Http ) {}

  getUsers(){
    console.log(this._getUrl)
    return this._http.get(this._getUrl)
    .map((response: Response)=> response.json());    
  }  
  addUser(user: User){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(user), options)
    .map((response: Response)=>response.json());
  }
  updateUser(user: User){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._puttUrl + user._id, JSON.stringify(user), options)
    .map((response: Response)=>response.json());
  }
  deletedVedio(user: User){
    return this._http.delete(this._deletetUrl + user._id)
    .map((response: Response)=> response.json());
  }
}