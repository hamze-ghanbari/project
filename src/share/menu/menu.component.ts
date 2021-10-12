import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private loginservice : LoginService,private router : Router,private token : TokenStorageService) { }
showLink  : boolean = true;

  ngOnInit(): void {
    if(this.token.getToken()){
      this.showLink=false;
    }else{
      this.showLink=true;
    }
    // if(localStorage.getItem('email') ==="Sincere@april.biz"){
    //   this.showLink=false;
    // }else{
    //   this.showLink=true;
    // }
  }
  public onLogout(event : Event){
    event.preventDefault();
    // this.loginservice.loggedIn;
   // this.loginservice.logout();
   this.token.signOut();
    this.router.navigate(['/login']);
  }

}
