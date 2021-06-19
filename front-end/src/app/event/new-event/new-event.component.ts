import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewEventService } from 'src/app/shared/new-event.service';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { NewEmailService } from 'src/app/shared/new-email.service';
import { Router } from "@angular/router";
import { DataManagerService } from 'src/app/shared/data-manager.service';

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
  private form_type: string | undefined;
  

  constructor(public newEventService:NewEventService,private data_manager:DataManagerService,public emailService:NewEmailService,private router : Router) { }

  ngOnInit(): void {
    this.data_manager.curr_msg.subscribe(form_type => this.form_type = form_type)


   }
  /**
   * Add chip(emails)
   * @param event 
   */
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
/**
 * Saves Data
 * @param form
 * Api call - using service
 */
  saveData(form: NgForm) {
    form.controls['members'].setValue(this.members)
    form.controls['formID'].setValue(this.form_type);

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
  
/**
 * Reset Form
 * @param form 
 */
  resetForm(form: NgForm) {
    this.newEventService.selectedEvent = {
      name: '',
      members: '',
      formID: '',
      message: ''
    }
  }
  /**
   * actionCenter
   * @param form 
   * Handles form creation
   */
  actionCenter(form:NgForm): void{
    //if all input are filed and valid
    if (this.validateInputs()) {
      //TODO: make dialog for sucsses
      this.saveData(form)
      this.sendEmail(form)
      setTimeout(() => {
        this.router.navigateByUrl('/event-center');
      }, 2000);
      
    }
    else {
      alert("Please fill all the inputs !")
      
    }
  }
  /**
   * Click event
   * when press on modal popup
   */
   openFormSelection() {
    this.showModal = true;
  }
  /**
   * Click event
   * @param selected 
   * when user select event form
   */
 selectedItem(selected:string) {
  this.showModal = false; // hide modal
   if (selected) {
    this.selected = selected;
  }
 }
  
  /**
   * validateInputs
   * @returns 
   * validates form filament
   */
  validateInputs(): boolean{

    //check if there is a name
    if (this.newEventService.selectedEvent.name == "" || this.newEventService.selectedEvent.name == 'undefined') {
      return false
    }
    //check if there is an email
    else if (this.emails.length < 1) {
      return false
    }
    //check if there is a form
    else if (this.selected == null || this.selected=="") {
      return false
    }
    else {
      return true
    }
 }
}
