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
  
  selectedItem() {
    if (this.selected == "basic-option") {
      this.data_manager.sendFormId("basic-option")
      this.router.navigateByUrl('/simple-form');
    }
    else if (this.selected == "birth-day-option") {
      this.data_manager.sendFormId("birth-day-option")
      this.router.navigateByUrl('/simple-form');
    }
    else if (this.selected == "organize-form") {
      
      this.data_manager.sendFormId("basic-option")
    }
    else if (this.selected == "picnic-form") {
      this.data_manager.sendFormId("basic-option")
    }
    else if (this.selected == "simple form") {
      this.data_manager.sendFormId("basic-option")
    }
    else {
      
    }
    this.onClose.emit(this.selected)
  }

}
