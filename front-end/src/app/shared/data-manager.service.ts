import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private form_msg = new BehaviorSubject<string>("basic-option");
  private name_msg = new BehaviorSubject<string>("Guest");
  curr_id_msg = this.name_msg.asObservable();
  curr_msg = this.form_msg.asObservable();

  constructor() { }

  sendFormId(msg: string) {
    this.form_msg.next(msg)
  }

  sendName(msg: string) {
    this.name_msg.next(msg)
  }

}
