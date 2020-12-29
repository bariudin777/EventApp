import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService,private router : Router) { }

  ngOnInit(): void {
    //for debug
    console.log("home page ")
  }
//redirect to action-center
  goToActionCenter(): void{
    this.router.navigateByUrl('/event-center');
  }
//redirect to new-event  
  goToNewEvent(): void{
    this.router.navigateByUrl('/new-event');
  }
}
