import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model.';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http : HttpClient) { }
 
  public getAllUer(){
   // return this.http.get<any>("https://api.github.com/users");
   return this.http.get<User>('https://jsonplaceholder.typicode.com/users');
  }

  public getUser(id : number){
   // return this.http.get<any>(`https://api.github.com/user/${id}`);
   return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  
}
 

