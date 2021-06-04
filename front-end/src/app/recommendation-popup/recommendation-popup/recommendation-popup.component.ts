import { Component, OnInit } from '@angular/core';
import { DataManagerService } from 'src/app/shared/data-manager.service';

@Component({
  selector: 'app-recommendation-popup',
  templateUrl: './recommendation-popup.component.html',
  styleUrls: ['./recommendation-popup.component.css']
})
export class RecommendationPopupComponent implements OnInit {
  public user_name: string | undefined;
  private flag :number=0
  constructor(private data_manager:DataManagerService) { }

  ngOnInit(): void {
    this.data_manager.curr_user_name.subscribe(un => this.user_name = un);
  }


  closeModal(): void{
    const modal = document.getElementById("recommendation-modal");
    if (modal == null || typeof modal == 'undefined') {
      return;
    }
    modal.style.display = "none";
  }

  sendRecommendations(): void{
    if (this.flag == 0) {
      this.flag++
      let elem = document.querySelector('#recommendation-modal');
      elem?.setAttribute("style","display:none")
    
    }
      


  }
}
