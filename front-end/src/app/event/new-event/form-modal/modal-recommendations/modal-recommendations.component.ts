import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent} from 'src/app/dialog-manager/info-dialog/info-dialog.component';


@Component({
  selector: 'app-modal-recommendations',
  templateUrl: './modal-recommendations.component.html',
  styleUrls: ['./modal-recommendations.component.css']
})
export class ModalRecommendationsComponent implements OnInit {
  public modal: any
  public dialog:any

  constructor() { }

  ngOnInit(): void {
    this.dialog = document.getElementById("myModal")
    
  }

  displayForm(): void{
    this.dialog.className += " is-active"
    const other_modals = document.getElementById("select-form-btn")
    if (other_modals != null) {
      other_modals.className = "modal"
    }

  }


}
