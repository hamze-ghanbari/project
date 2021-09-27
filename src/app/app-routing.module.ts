import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path : '' , component : HomeComponent },
  {path : 'users' , component : UsersComponent },
  {path : 'user/:id' , component : UserComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'notfound' , component :NotFoundComponent },
  {path : '**' , component : NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
