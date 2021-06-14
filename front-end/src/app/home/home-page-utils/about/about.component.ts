import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openWeb() {
    window.open("https://jamieturner.live/37-key-facts-for-meeting-planners-conference-planners-event-planners/")
  }

}
