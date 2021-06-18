import { Injectable } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Injectable({
  providedIn: 'root'
})
export class DownloadFormService {
public form_display_id:string="basic-form"
  constructor() { }

  downloadHTMLFormToPdf(id:string): void{
    let element = document.getElementById(id)
    if (element) {
      html2canvas(element).then((canvas) => {
        let img_data = canvas.toDataURL('image/png');
        let doc = new jspdf()
        doc.addImage(img_data, 0, 0, 208, 500)
        doc.save('image.pdf')
      })
    }
  }

  downloadPdfFromFolder(url: string,name:string) {
    FileSaver.saveAs(url, name);

}



}
