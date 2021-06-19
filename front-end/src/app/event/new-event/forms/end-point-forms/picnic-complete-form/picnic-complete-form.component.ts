import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-picnic-complete-form',
  templateUrl: './picnic-complete-form.component.html',
  styleUrls: ['./picnic-complete-form.component.css']
})
export class PicnicCompleteFormComponent implements OnInit {

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
