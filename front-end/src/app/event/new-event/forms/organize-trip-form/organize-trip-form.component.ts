import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-organize-trip-form',
  templateUrl: './organize-trip-form.component.html',
  styleUrls: ['./organize-trip-form.component.css']
})
export class OrganizeTripFormComponent implements OnInit {
  @Input() modelGroupName: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
