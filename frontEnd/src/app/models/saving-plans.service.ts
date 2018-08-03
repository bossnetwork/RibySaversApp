import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Saving } from './saving.model'
import { User } from './user.model'

@Injectable()
export class SavingPlansService {

  saving : Saving[];
  readonly savingPlansApiUrl = "http://localhost:3000/api/savings-plans/";

  constructor(private http : HttpClient) { }

  getSavingPlans(user: User){
    return this.http.get(this.savingPlansApiUrl+`${user._id}`)
  }

  createSavingPlan(saving: Saving){
    return this.http.post(this.savingPlansApiUrl,saving)
  }
  // loginUser(saving:Saving){
  //   return this.http.post(this.savingPlansApiUrl+'/login',saving)
  // }

}
