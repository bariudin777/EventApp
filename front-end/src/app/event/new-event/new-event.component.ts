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


  onSubmit(form: NgForm) {
    form.controls['members'].setValue(this.members)
    console.log("in onsubmit method");

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
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        }

      }
    );
      //send emails
    console.log("in on submit method and before postMail");
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

  actionCenter(): void{
    //TO FIX- navigate only if the form filament was completely finished
    setTimeout(() => {
      this.router.navigateByUrl('/event-center');
    }, 2000);
    
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
}
