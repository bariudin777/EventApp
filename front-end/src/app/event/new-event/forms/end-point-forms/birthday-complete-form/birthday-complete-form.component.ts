import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-birthday-complete-form',
  templateUrl: './birthday-complete-form.component.html',
  styleUrls: ['./birthday-complete-form.component.css']
})
export class BirthdayCompleteFormComponent implements OnInit {

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
