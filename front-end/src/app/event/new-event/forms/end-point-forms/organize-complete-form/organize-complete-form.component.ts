import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-organize-complete-form',
  templateUrl: './organize-complete-form.component.html',
  styleUrls: ['./organize-complete-form.component.css']
})
export class OrganizeCompleteFormComponent implements OnInit {

  constructor() { }
  onSubmit(form: NgForm): void {
    return;
  }

  onClick(form: NgForm): void {
    const json = JSON.stringify(form.value);

    console.log(json);

  }

  ngOnInit(): void {
  }

}
