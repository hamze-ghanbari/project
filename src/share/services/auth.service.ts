import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from '../models/login.models';

const AUTH_API = 'https://jsonplaceholder.typicode.com/users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset : utf-8' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, username: string): Observable<any> {
    return this.http.post(AUTH_API, {
      email,
      username
    }, httpOptions);
  }

  // register(username: string, email: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_API + 'signup', {
  //     username,
  //     email,
  //     password
  //   }, httpOptions);
  // }
}