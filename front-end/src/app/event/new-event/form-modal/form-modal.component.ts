import { Component, OnInit,EventEmitter,Output,Input  } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  cancel() { this.onClose.emit(null); }
  selectedItem() {
    //here i will cancel the redirection and just return the form id
    //doing this just for debug
    if (this.selected == "simple form") {
      this.router.navigateByUrl('/simple-form')
    }
    this.onClose.emit(this.selected)
  }

}
