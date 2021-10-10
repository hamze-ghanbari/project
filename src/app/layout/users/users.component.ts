import { Component, OnInit } from '@angular/core';
import { User } from 'src/share/models/user.model.';
import { LoginService } from 'src/share/services/login.service';
import { UserService } from 'src/share/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
data : User[];
  constructor(private userservice : UserService,private login : LoginService) { }

  ngOnInit(): void {
     this.userservice.getAllUer().subscribe((res : any) =>{
    this.data=res;
 
    });
     
  }
 
}
