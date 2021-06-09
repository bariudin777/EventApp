import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {
  private dialog: any
  public description: string | undefined;
  public users_recommendations: string|undefined;
  constructor() { }

  ngOnInit(): void {
    this.dialog = document.getElementById("info-modal")
    //get the recommendation from api
    this.description = `Trip to Eilat: 
    Transport to destination: car \n
    Car rental: the best price you get is 400nis.\n
    Hotels: Hilton\n
    Dates: 19.2.2021- 21.2.2021\n
    Price: 1000 nis per person(car not included)`
    this.users_recommendations = "Daniel: Was great!"
    //display dynamically

    
  }
  cancel() {
    this.dialog.className= "modal"
  }
  displayForm(): void{
    //download form with : https://stackoverflow.com/questions/61203930/how-to-export-data-table-to-pdf-using-angular-material
    
  }
}
