import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private form_msg = new BehaviorSubject<string>("basic-option");
  curr_msg = this.form_msg.asObservable();

  constructor() { }

  sendFormId(msg: string) {
    this.form_msg.next(msg)
  }

}
