import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  
  private form_msg = new BehaviorSubject<string>("basic-option");
  private user_name = new BehaviorSubject<string>("Guest");
  curr_msg = this.form_msg.asObservable();
  curr_user_name = this.user_name.asObservable();

  constructor() { }
  //send form id name
  sendFormId(msg: string) {
    this.form_msg.next(msg)
  }

  sendUserName(msg: string) {
    console.log("data manager: " + msg);
    this.user_name.next(msg); 
  }

}
