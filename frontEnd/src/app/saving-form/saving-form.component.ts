import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core'

@Component({
  selector: 'app-saving-form',
  templateUrl: './saving-form.component.html',
  styleUrls: ['./saving-form.component.css']
})
export class SavingFormComponent implements OnInit {
  public userId;
  public token;

  public durations = [
    {id:1,name:"1 Month"},
    {id:2,name:"2 Months"},
    {id:3,name:"3 Months"},
    {id:4,name:"4 Months"},
    {id:5,name:"5 Months"},
    {id:6,name:"6 Months"},
    {id:7,name:"7 Months"},
    {id:8,name:"8 Months"},
    {id:9,name:"9 Months"},
    {id:10,name:"10 Months"},
    {id:11,name:"11 Months"},
    {id:12,name:"12 Months"},
  ]
  constructor(private cookieService:CookieService) { }

  ngOnInit() {
    this.userId= this.cookieService.get('payload');
    // this.userId = payload.user_details._id;
    // this.token = payload.token;
  }

}
