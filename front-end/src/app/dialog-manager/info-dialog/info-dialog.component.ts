import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import { DownloadFormService } from 'src/app/shared/download-form.service';
import { FormManagerService } from 'src/app/shared/form-manager.service';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {
  private dialog: any
  public description: string | undefined;
  public users_recommendations: string|undefined;
  public dispalyVar:string="none"
  constructor(public forms_service: FormManagerService, public pdf_service: DownloadFormService) { }
  
  ngOnInit(): void {
    const form = this.forms_service.getFormData("1");

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
     //get the form id and display it 
    this.dispalyVar="block"

  }

  submitForm(): void{
    
  }
  downloadForm(): void{
    var t = "assets/files/forms/Capture-converted.pdf"
    this.pdf_service.downloadPdfFromFolder("sd")

  }
}