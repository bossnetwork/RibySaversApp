import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { CreditWallet } from './wallet.model'
// import { User } from './user.model'

@Injectable()
export class CreditWalletService {

  wallet : CreditWallet;

  readonly creditWalletApiUrl = "https://sandbox.interswitchng.com/webpay/pay";

  constructor(private http : HttpClient) { }

  makePayment(wallet: CreditWallet){
    return this.http.post(this.creditWalletApiUrl,wallet)
  }


}
