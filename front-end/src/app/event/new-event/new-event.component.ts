import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewEventService } from 'src/app/shared/new-event.service';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { NewEmailService } from 'src/app/shared/new-email.service';
import { Router } from "@angular/router";

export interface Email {
  addr: string;
}


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  showSuccessMessage: boolean |undefined;
  serverErrorMessages: string | undefined;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  emails: Email[] = [];
  members: String[] = [];
  showModal: boolean = false;
  selected: string = '';
  

  constructor(public newEventService:NewEventService,public emailService:NewEmailService,private router : Router) { }

  ngOnInit(): void { }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.emails.push({ addr: value.trim() });
      this.members.push(value)
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  // Chip removal
  remove(fruit: Email): void {
    const index = this.emails.indexOf(fruit);

    if (index >= 0) {
      this.emails.splice(index, 1);
    }
  }


  saveData(form: NgForm) {
    debugger
    form.controls['members'].setValue(this.members)

    this.newEventService.postEvent(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        this.resetForm(form);
        
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else {
          this.serverErrorMessages = 'Something went wrong. Please contact admin.';
        }

      }
    );
}


/**
 * fix the submission
 * @param form 
 */
  sendEmail(form: NgForm) {
    debugger;
    this.emailService.postMail(form.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else {
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        }

      }

    )
  }

  resetForm(form: NgForm) {
    this.newEventService.selectedEvent = {
      name: '',
      members: '',
      formID: '',
      message: ''
    }
  }

  actionCenter(form:NgForm): void{
    //if all input are filed and valid
    if (this.validateInputs()) {
      //TODO: make dialog for sucsses
      this.sendEmail(form)
      this.saveData(form)
      setTimeout(() => {
        this.router.navigateByUrl('/event-center');
      }, 2000);
      
    }
    else {
      //TODO: make dialog for failure
      alert("false")
      
    }
    
  }
  
  selectItem() {
    this.showModal = true;
    console.log("in select item")
  }
  
 selectedItem(selected:string) {
  this.showModal = false; // hide modal
  if(selected) {
    this.selected = selected;
  }
 }
  
  
  validateInputs(): boolean{
    //check if there is a name
    if (this.newEventService.selectedEvent.name == "" || this.newEventService.selectedEvent.name == 'undefined') {
      return false
    }
    //check if there is an email

    //check if there is a form

   return true
 }
}
