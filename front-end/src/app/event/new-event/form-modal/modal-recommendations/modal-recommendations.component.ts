import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent} from 'src/app/dialog-manager/info-dialog/info-dialog.component';


@Component({
  selector: 'app-modal-recommendations',
  templateUrl: './modal-recommendations.component.html',
  styleUrls: ['./modal-recommendations.component.css']
})
export class ModalRecommendationsComponent implements OnInit {
   public dialog:any

  constructor() { }

  ngOnInit(): void {
    this.dialog = document.getElementById("info-modal")
    
  }

  displayForm(): void {
    this.dialog.className += " is-active"

  }

}
