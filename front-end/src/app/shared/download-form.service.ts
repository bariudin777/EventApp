import { Injectable } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class DownloadFormService {

  constructor() { }

  downloadFormToPdf(): void{
    let element = document.getElementById("app-base-form")
    if (element) {
      html2canvas(element).then((canvas) => {
        let img_data = canvas.toDataURL('image/png');
        let doc = new jspdf()
        doc.addImage(img_data, 0, 0, 208, 500)
        doc.save('image.pdf')
      })
    }


}





}
