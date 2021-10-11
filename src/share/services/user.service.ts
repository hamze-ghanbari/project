import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model.';
import { Observable, throwError } from 'rxjs';
  //import { error_handle } from 'src/share/error_handling/error_handle.class';
 import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http : HttpClient ) { }

  public getAllUer(){
   // return this.http.get<any>("https://api.github.com/users");
   return this.http.get<User>('https://jsonplaceholder.typicode.com/users');
  }

  public getUser(id : number){
   // return this.http.get<any>(`https://api.github.com/user/${id}`);
   return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
public editUser(user : User , id : number): Observable<User> {
  return this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${id}` ,user )
    // .pipe(
    //   catchError(this.error.handleError)
    // );
}
}
 

