import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-recommendations',
  templateUrl: './modal-recommendations.component.html',
  styleUrls: ['./modal-recommendations.component.css']
})
export class ModalRecommendationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  displayForm(): void{
  alert("display")
}


}
