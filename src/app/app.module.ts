import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { UsersComponent } from './layout/users/users.component';
import { UserComponent } from './layout/user/user.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
 import { MenuComponent } from 'src/share/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from 'src/share/auth.interceptor';
 //import { error_handle } from 'src/share/error_handling/error_handle.class';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    LoginComponent,
    NotFoundComponent,
    MenuComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
    //{provide: ErrorHandler, useClass: error_handle}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
