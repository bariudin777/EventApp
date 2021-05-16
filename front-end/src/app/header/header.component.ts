import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../shared/data-manager.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private user_name: string | undefined;
  constructor(private data_manager:DataManagerService,private router : Router) { }

  ngOnInit(): void {
    //TODO- fix name transport
    this.data_manager.curr_user_name.subscribe(un => this.user_name = un);
  }

  goToHome(): void{
    this.router.navigateByUrl('/home');
  }

}
