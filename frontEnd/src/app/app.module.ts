import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { UserService } from './models/user.service';
import { SavingPlansService } from './models/saving-plans.service';
import { CreditWalletService } from './models/credit-wallet.service';
import { AuthService } from './models/auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service'

import { SavingsListComponent } from './savings-list/savings-list.component';
import { SavingFormComponent } from './saving-form/saving-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthenticateUserComponent } from './authenticate-user/authenticate-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SavingsListComponent,
    SavingFormComponent,
    RegistrationFormComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    AuthenticateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,SavingPlansService,CreditWalletService,AuthService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
