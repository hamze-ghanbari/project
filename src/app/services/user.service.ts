import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http : HttpClient) { }
 
  public getAllUer(){
    return this.http.get<any>("https://api.github.com/users");
  }

  public getUser(id : number){
    return this.http.get<any>(`https://api.github.com/user/${id}`);
  }

}
 

