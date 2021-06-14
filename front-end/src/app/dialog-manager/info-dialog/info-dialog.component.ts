import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import { FormManagerService } from 'src/app/shared/form-manager.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {
  private dialog: any
  public description: string | undefined;
  public users_recommendations: string|undefined;
  constructor(public forms_service:FormManagerService) { }
    
  ngOnInit(): void {
    debugger
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
    //download form with : https://stackoverflow.com/questions/61203930/how-to-export-data-table-to-pdf-using-angular-material
     
  }

  submitForm(): void{
    
  }
  downloadForm(): void{
    let element = document.getElementById("info-modal")
    if (element) {
      html2canvas(element).then((canvas) => {
        console.log(canvas);
        let img_data = canvas.toDataURL('image/png');
        let doc = new jspdf()
        doc.addImage(img_data, 0, 0, 208, 500)
        doc.save('image.pdf')
      })
    }

  }
}
