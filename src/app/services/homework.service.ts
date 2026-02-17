import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  private apiUrl = 'https://localhost:44341/api/homework';

  constructor(private http: HttpClient) { }

  sendHomework(formData: FormData) {
    return this.http.post(this.apiUrl + '/send', formData);
  }
}
