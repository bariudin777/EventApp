import { Injectable } from '@angular/core';
import { Form } from './models/form.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormManagerService {

  selectedUser: Form = {
    formID:'',
    formName: '',
    location: '',
    avgSpending: 0,
    eventDuration: '',
    images: [],
    peopleRecommendation: '',
    formUrl: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  getFormData(formID: string) {
    return this.http.get(environment.apiBaseUrl + '/get-form-data-by-id/formID=' + formID);
  }
}
