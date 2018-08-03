import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// import { User } from './user.model'

@Injectable()
export class AuthService {


  readonly authApiUrl = `http://localhost:3000/api/users/authenticate/`;

  constructor(private http : HttpClient) { }

  authUser(user_id,token){
    return this.http.get(this.authApiUrl+user_id +"/"+token)
  }


}
