import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm): void {
    return;
  }

  onClick(form: NgForm): void {
    const json = JSON.stringify(form.value);
    console.log(json);
    this.router.navigateByUrl('/new-event');
  }

}
