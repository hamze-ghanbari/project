import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
data : User[];
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
     this.userservice.get().subscribe((res : any) =>{
this.data=res;
    });
  }
 
}
