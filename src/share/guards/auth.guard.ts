import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
 
import { LoginService } from '../services/login.service';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginservice : LoginService,private router : Router,private token : TokenStorageService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return  this.loginservice.checkLogin()
    if(this.token.getToken()){
      return true;
    }else{
      this.router.navigate(['/login']);
    }
    // .then((response : any) => {
    //   if(response){
    //      return true;
    //   }else{
    //     this.router.navigate(['/login']);
    //   }
    // });
  }
  
}
