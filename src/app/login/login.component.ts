import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { login } from '../classes/login.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSubmitted : boolean =false;
  userLogin : login;
  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form : NgForm){
    this.userLogin=form.value;
     
  }
}
