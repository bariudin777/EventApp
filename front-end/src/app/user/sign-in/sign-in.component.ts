import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from '../../shared/user.service';
import { DataManagerService } from '../../shared/data-manager.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService,private router : Router,private data_manager:DataManagerService) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string | undefined;
  ngOnInit() {
    if (this.userService.isLoggedIn())
    this.router.navigateByUrl('/home');
  }

  onSubmit(form: NgForm) {

    this.userService.login(form.value).subscribe(
      res => {
        if (res != null || typeof res != 'undefined') {
          const user_name = this.generateUserName(form.value);
          this.data_manager.sendName(user_name);
          this.userService.setToken(res);
          this.router.navigateByUrl('/home');
        }
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
  generateUserName(form: any): string {
    //take the name from email
    const index = form.email.indexOf('@');
    const name = form.email.substr(0, index);
    return name;
  }

}