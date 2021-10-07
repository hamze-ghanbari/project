import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
 import { login } from 'src/share/models/login.models';
 import { User } from 'src/share/models/user.model.';
import { LoginService } from 'src/share/services/login.service';
import { UserService } from 'src/share/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin : login;
  message : string;
  datauser : User[];
  constructor(private loginservice : LoginService,private router : Router,private userservice : UserService) { }

  ngOnInit(): void {
  }

  public submitForm(form : NgForm){
    this.userLogin=form.value;
    if(this.loginservice.checkAuth(this.userLogin.email,this.userLogin.username)){
      this.loginservice.loggedIn=true;
      
      // this.userid=res.find((user : any) => user.email === this.userLogin.email);
      // this.userservice.getAllUer().subscribe((res : any) =>{
      //   this.datauser=res.find((user : any)=> user.email === this.userLogin.email);
      //   console.log(this.datauser.id);
      //   });
        
      this.router.navigate(['/']);
    }else{
      this.message ="نام کاربری یا ایمیل اشتباه می باشد";
    }
  }
}
