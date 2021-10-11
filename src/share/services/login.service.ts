import { Injectable } from '@angular/core';
import { User } from '../models/user.model.';
import { UserService } from './user.service';
import { JwtHelperService} from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { login } from '../models/login.models';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  loggedIn : boolean =false;
  

  // public checkLogin(){
    
  //  return new Promise((resolve)=>{
  //    resolve(this.loggedIn);
  //  });
   
  // }
   public checkAuth(userData :  login){

    return this.http.post<login>('https://jsonplaceholder.typicode.com/users',userData);
    // if(email == "Sincere@april.biz" && username == "Bret"){
    // this.login(email);
    //   return true;
    // }else{
    //   return false;
    // }
   }
  public login(email : string){
    localStorage.setItem('email',email);
   // this.loggedIn=true;
  }
  public logout(){
    localStorage.removeItem('email');
//this.loggedIn=false;
  }
}
