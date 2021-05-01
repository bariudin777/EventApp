import { Component, ElementRef, Input, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataManagerService } from 'src/app/shared/data-manager.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  private form_type: string | undefined;
  public flag: string="";


  constructor(private router : Router,private data_manager:DataManagerService) { }
 
  
  ngAfterViewInit() {
    switch (this.form_type) {
      case "basic-option":
        this.flag='birth-day'
        break;
      case "birth-day-option":
        this.flag='birth-day'
        break;
    }
  }




  ngOnInit(): void {
    try {
      this.data_manager.curr_msg.subscribe(form_type => this.form_type = form_type)
    }
    catch (err) {
      console.log(err)
    }
  }


  onSubmit(form: NgForm): void {
    return;
  }

  onClick(form: NgForm): void {
    const json = JSON.stringify(form.value);
    this.router.navigateByUrl('/new-event');
  }

}
/*
    try {
      this.data_manager.curr_msg.subscribe(form_type=>this.form_type=form_type)

      if (typeof this.element =="undefined") {
        throw "Element is Empty "
      } 
      switch (this.form_type) {
        case "basic-option":
          console.log("nothing to add- you are boring...")
          break;
        case "birth-day-option":
          console.log(this.form_type)
          this.element.nativeElement.innerHTML = ` <app-birthday-form modelGroupName="app-birthday-form"></app-birthday-form>`;
          break;
      }
    }
    catch (err) {
      console.log(err)
    }

*/