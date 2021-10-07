import { Injectable } from '@angular/core';
import { User } from '../models/user.model.';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private userservice : UserService) { }

  loggedIn : boolean =false;
  

  public checkLogin(){
    
   return new Promise((resolve)=>{
     resolve(this.loggedIn);
   });
   
  }
   public checkAuth(email : string , username : string){
    if(email == "Sincere@april.biz" && username == "Bret"){
      return true;
    }else{
      return false;
    }
   }

  public login(){
    this.loggedIn=true;
  }
  public logout(){
this.loggedIn=false;
  }
}
