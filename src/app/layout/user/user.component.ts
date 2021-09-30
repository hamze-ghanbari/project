import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../classes/user.class';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user : User= new User();
id : number;
  constructor(private activeRoute : ActivatedRoute,
              private router : Router,
              private  userservice : UserService) { }

  ngOnInit(): void {
    this.id=+this.activeRoute.snapshot.params['id'];
    // this.userservice.get().subscribe(res => {
    
    //   this.user=res.find((user : any) => user.id === this.id)
    //   if(!this.user){
    //     this.router.navigate(['/notfound']);
    //   } 
    // });
  this.userservice.getUser(this.id).subscribe(res =>{
    this.user=res;
  });
  }

}
