import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
 
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginservice : LoginService,private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return  this.loginservice.checkLogin()
    if(localStorage.getItem('email') === 'Sincere@april.biz'){
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
