import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewEvent } from './new-event.model';




@Injectable({
  providedIn: 'root'
})
export class NewEventService {
  selectedEvent: NewEvent = {
    name: '',
    members: '',
    formID: '',
    message: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }
  


//HttpMethods

  postEvent(newEvent: NewEvent) {
  
  return this.http.post(environment.apiBaseUrl + '/new-event', newEvent, this.noAuthHeader);
}





}

