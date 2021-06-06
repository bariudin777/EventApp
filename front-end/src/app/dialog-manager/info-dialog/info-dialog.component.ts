import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {
  private dialog:any
  constructor() { }

  ngOnInit(): void {
    this.dialog = document.getElementById("info-modal")
  }
  cancel() {
    this.dialog.className= "modal"
  }
  displayForm(): void{
  }
}
