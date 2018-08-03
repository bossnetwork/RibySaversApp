import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parse } from 'querystring';
import { AuthService } from '../models/auth.service';

declare var M : any;

@Component({
  selector: 'app-authenticate-user',
  templateUrl: './authenticate-user.component.html',
  styleUrls: ['./authenticate-user.component.css']
})
export class AuthenticateUserComponent implements OnInit {
  public user_id;
  public token;

  constructor(private activatedRoute: ActivatedRoute,private authService : AuthService,private router:Router) { }

  ngOnInit() {
    this.user_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
    this.authenticateUser();
  }

  authenticateUser(){
    this.authService.authUser(this.user_id,this.token).subscribe((res)=>{
      var object = JSON.stringify(res);
      var Main = JSON.parse(object);
      if(!Main.status) {
        // this.resetForm(form)
        M.toast({
            html:`<p>${Main.message}</p>`,
            classes:"rounder"
        });
      }else{
         M.toast({
          html:`<p>${Main.message}</p>`,
          classes:"rounder"
        });
        this.router.navigateByUrl('login');
      }
    })
  }

}
