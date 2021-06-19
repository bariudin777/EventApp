import { Component, OnInit,EventEmitter,Output,Input  } from '@angular/core';
import { Router } from '@angular/router';
import { DataManagerService } from 'src/app/shared/data-manager.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {

  @Input()
  selected: string = ''; 
  
  @Output()
  onClose = new EventEmitter();
  //HERE I WILL INSERT THE FORM FACTORY
  constructor(private router : Router, private data_manager:DataManagerService) { }

  ngOnInit(): void {
  }
  cancel() { this.onClose.emit(null); }
  
  /**
   * selectedItem
   * selecting the type of the form
   * send data to new-event
   */

  selectedItem() {
    if (this.selected == "basic-option") {
      this.data_manager.sendFormId("simple-form")
      // this.router.navigateByUrl('/simple-form');
    }
    else if (this.selected == "birthday-form") {
      this.data_manager.sendFormId("birthday-form")
      // this.router.navigateByUrl('/simple-form');
    }
    else if (this.selected == "organize-form") {
      this.data_manager.sendFormId("organize-form")
      // this.router.navigateByUrl('/simple-form');
    }
    else if (this.selected == "picnic-form") {
      this.data_manager.sendFormId("picnic-option");
      // this.router.navigateByUrl('/simple-form');
    }
    else {
      this.data_manager.sendFormId("simple-form")
      // this.router.navigateByUrl('/simple-form');
    }
    this.onClose.emit(this.selected)
  }

}
