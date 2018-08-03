import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model'

@Injectable()
export class UserService {

  users : User[];
  readonly usersApiUrl = "http://localhost:3000/api/users";

  constructor(private http : HttpClient) { }

  registerUser(user: User){
    return this.http.post(this.usersApiUrl,user)
  }
  loginUser(user:User){
    return this.http.post(this.usersApiUrl+'/login',user)
  }

}
