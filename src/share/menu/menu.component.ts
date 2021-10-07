import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private loginservice : LoginService,private router : Router) { }
showLink  : boolean = true;
  ngOnInit(): void {
    if(this.loginservice.loggedIn){
      this.showLink=false;
    }
  }

  public onLogout(event : Event){
    event.preventDefault();
    this.loginservice.loggedIn=false;
    this.router.navigate(['/login']);
  }

}
