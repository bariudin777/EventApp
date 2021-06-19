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
        console.log("in basic");
        break;
      case "birth-day-option":
        this.flag='birth-day-option'
        break;
      case "organize-option":
        this.flag='organize-option'
      break;
      case "picnic-option":
        this.flag='picnic-option'
        break;
    
    }
    
  }


  ngOnInit(): void {
    try {
      this.flag=""
      this.data_manager.curr_msg.subscribe(form_type => this.form_type = form_type)
    }
    catch (err) {
      console.log(err)
    }
  }

/**
 * 
 * @param form 
 * Submit function to data base- this form will be filled by users
 */
  onSubmit(form: NgForm): void {
    const json = JSON.stringify(form.value);
    debugger
    this.router.navigateByUrl('/new-event');
    return;
  }


}
