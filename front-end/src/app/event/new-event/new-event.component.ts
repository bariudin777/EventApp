import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { NewEventService } from 'src/app/shared/new-event.service';



@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  showSuccessMessage: boolean |undefined;
  serverErrorMessages: string | undefined;

  constructor(public newEventService:NewEventService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    
    this.newEventService.postEvent(form.value).subscribe(
      res => {
        //send emails
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
  }


  resetForm(form: NgForm) {
    this.newEventService.selectedEvent = {
      name: '',
      members: '',
      formID: '',
      message: ''
    }
    
  }

}
