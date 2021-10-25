import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/share/models/user.model.';
import { UserService } from 'src/share/services/user.service';

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
    // this.id=+this.activeRoute.snapshot.params['id'];
this.id=+this.activeRoute.snapshot.paramMap.get('id');
  //  this.activeRoute.queryParams.subscribe(param => {
  //   this.id=param['id']
  //  });
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

  // ? call
public onEdit(){
 // this.user=form.value;
   this.userservice.editUser(this.user,+this.activeRoute.snapshot.params['id'])
  .subscribe(response => console.log(response));
}
}
