import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavingsListComponent } from './savings-list/savings-list.component';
import { SavingFormComponent } from './saving-form/saving-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthenticateUserComponent } from './authenticate-user/authenticate-user.component';

const routes: Routes = [
  {path:'',component:SavingsListComponent},
  {path:'savings',component:SavingsListComponent},
  {path:'savings/create',component:SavingFormComponent},
  {path:'register',component:RegistrationFormComponent},
  {path:'login',component:LoginFormComponent},
  {path:'authenticate/:id/:token',component:AuthenticateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
