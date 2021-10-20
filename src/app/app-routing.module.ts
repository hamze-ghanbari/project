import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { UserComponent } from './layout/user/user.component';
import { UsersComponent } from './layout/users/users.component';
import { AuthGuard } from 'src/share/guards/auth.guard';

const routes: Routes = [
  {path : '' , component : HomeComponent },
  {path : 'users' , component : UsersComponent , canActivate : [AuthGuard] },
  {path : 'user/:id' , component : UserComponent , canActivate : [AuthGuard] },
  {path : 'login' , component : LoginComponent},
  {path : 'notfound' , component :NotFoundComponent },
  {path : '**' , redirectTo : 'notfound' ,pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
