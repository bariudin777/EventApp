import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../shared/data-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private user_name: string | undefined;
  constructor(private data_manager:DataManagerService) { }

  ngOnInit(): void {
    this.data_manager.curr_id_msg.subscribe(user_name => this.user_name = user_name)
    debugger;
  }

}
