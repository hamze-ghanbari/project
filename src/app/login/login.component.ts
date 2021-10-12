import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
 import { login } from 'src/share/models/login.models';
 import { User } from 'src/share/models/user.model.';
import { AuthService } from 'src/share/services/auth.service';
import { LoginService } from 'src/share/services/login.service';
import { TokenStorageService } from 'src/share/services/token-storage.service';
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

   isLoggedIn : boolean = false;
  isLoginFailed = false;
  //constructor(private loginservice : LoginService,private router : Router,private userservice : UserService) { }
constructor(private authService: AuthService,
            private tokenStorage: TokenStorageService,
            private router : Router){}
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.router.navigate(['/']);
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }
public submitForm(form : NgForm){
  // const { email, username } = this.userLogin;
this.userLogin=form.value;
  this.authService.login( this.userLogin.email, this.userLogin.username).subscribe(
    data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data.id);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.router.navigate(['/']);
     // this.roles = this.tokenStorage.getUser().roles;
      //this.reloadPage();
    },
    err => {
      this.message = err.error.message;
      this.isLoginFailed = true;
    }
  );
}

// reloadPage(): void {
//   window.location.reload();
// }

  // public submitForm(form : NgForm){
  //   this.userLogin=form.value;
  //   this.loginservice.checkAuth(this.userLogin).subscribe(response => console.log(response));
  //   // if(this.loginservice.checkAuth(this.userLogin)){
  //   //   this.loginservice.loggedIn=true;
      
  //   //   // this.userid=res.find((user : any) => user.email === this.userLogin.email);
  //   //   // this.userservice.getAllUer().subscribe((res : any) =>{
  //   //   //   this.datauser=res.find((user : any)=> user.email === this.userLogin.email);
  //   //   //   console.log(this.datauser.id);
  //   //   //   });
        
  //   //   this.router.navigate(['/']);
  //   // }else{
  //   //   this.message ="نام کاربری یا ایمیل اشتباه می باشد";
  //   // }
  // }
}
function input() {
  throw new Error('Function not implemented.');
}

