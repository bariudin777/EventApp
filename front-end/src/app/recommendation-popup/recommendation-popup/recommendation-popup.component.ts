import { L } from '@angular/cdk/keycodes';
import { Component, OnInit,Renderer2 } from '@angular/core';
import { DataManagerService } from 'src/app/shared/data-manager.service';

@Component({
  selector: 'app-recommendation-popup',
  templateUrl: './recommendation-popup.component.html',
  styleUrls: ['./recommendation-popup.component.css']
})
export class RecommendationPopupComponent implements OnInit {
  public user_name: string | undefined;
  constructor(private data_manager:DataManagerService,) { }

  ngOnInit(): void {
    this.data_manager.curr_user_name.subscribe(un => this.user_name = un);
    const options = [1, 2, 3, 4, 5];
    this.createCommendations("Surprise Birth-Day Party", options, 1)
    this.createCommendations("Picnic near the lake", options, 2)
    this.createCommendations("Organized Trip to the North", options, 3)
    this.createCommendations("Fun day at the sea", options, 4)
    this.createCommendations("New Years celebration indoors", options, 5)
    this.creatLabels(options)
    
  }

/**
 * Closing the Recommendation popup
 * @returns 
 * 
 */
  closeModal(): void{
    const modal = document.getElementById("recommendation-modal");
    if (modal == null || typeof modal == 'undefined') {
      return;
    }
    modal.style.display = "none";
  }

/**
 * Creates an dynamic list of labels list
 * @returns 
 */
  creatLabels(list: number[]): void{
    const elem = document.getElementById("modal-title-wrapper");
    let label_element="";
    for (let i in list) {
      label_element += `<label>${i}</label>`
    }
    const wrapper = `<div class="ratings-title" style="display: flex;
    justify-content: flex-end;" >
                         ${label_element} 
                         </div>`
     elem?.insertAdjacentHTML("afterbegin",wrapper)
  
}
/**
 * Dynamiclly create recommendation for the pop up
 * @param recommendation 
 * @param options 
 * @param name 
 */
  createCommendations(recommendation: string, options: number[], name: number): void {
    const elem = document.getElementById("modal-title-wrapper");
    let recommendation_elem = `<div class="label-wrapper-rec" style="    display: flex;
    justify-content: space-between;">
    <label class="field">${recommendation}</label>
    <div class="control-1">`;
    let radio_btns = ""
    for (let i in options) {
        radio_btns += `<label class="radio">
                        <input type="radio" name="${name}" >
                       </label>`
      }
      recommendation_elem += radio_btns;
      recommendation_elem += '</div> </div>'
      elem?.insertAdjacentHTML("afterbegin",recommendation_elem)
  }

/**
 * Send recommendation to recommendation service to store at data base
 * 
 */
  sendRecommendations(): void{

    debugger
    this.getRecommendations()
    let element = document.querySelector('#recommendation-modal');
    element?.setAttribute("style","display:none")
  


}
  getRecommendations(): void{


  }


} 
