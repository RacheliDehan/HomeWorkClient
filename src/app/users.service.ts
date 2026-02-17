import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CreateUserRequest {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private path = 'https://localhost:44341/api/Users';
  private postpath = 'http://localhost:44341';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.path);
  }

  createUser(user: CreateUserRequest): Observable<any> {

    return this.http.post(this.path, user, {
      headers: {
        accept: 'text/plain',
        'Content-Type': 'application/json'
      },
      responseType: 'text'
    });
  }

}


