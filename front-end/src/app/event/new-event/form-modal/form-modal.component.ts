import { Component, OnInit,EventEmitter,Output,Input  } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  cancel() { this.onClose.emit(null); }
  selectedItem() { this.onClose.emit(this.selected) }

}
