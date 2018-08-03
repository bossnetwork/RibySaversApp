import { Component, OnInit } from '@angular/core';


import { UserService } from '../models/user.service';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var M : any;
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  users : User[];
  user : User;

  constructor(private userService : UserService,private router: Router) { }
  resetForm(form?:NgForm){
    this.user = {
      name:"",
      email : "",
      phoneNumber : "",
      password : ""
    }
  }
  ngOnInit() {
  }

  loginSubmit(form : NgForm){
    this.userService.loginUser(form.value).subscribe((res)=>{
      var object = JSON.stringify(res);
      var main = JSON.parse(object);
      if(!main.status) {
        // this.resetForm(form)
        M.toast({
            html:`<p>${main.message}</p>`,
            classes:"rounder"
        });
      }else{
         this.resetForm(form)
         M.toast({
          html:`<p>${main.message}</p>`,
          classes:"rounder"
        });
        this.router.navigateByUrl('savings');
      }
      // }
    })
    
  }

}

