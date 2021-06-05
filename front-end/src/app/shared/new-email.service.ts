import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewMail } from './new-mail.model';

@Injectable({
  providedIn: 'root'
})
export class NewEmailService {
  selectedMail: NewMail = {
    from: '',
    to: [],
    subject: '',
    message: ''
  };
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }

  postMail(newMail: NewMail) {
    return this.http.post(environment.apiBaseUrl+ '/new-mail',newMail,this.noAuthHeader);
  }
  



}
