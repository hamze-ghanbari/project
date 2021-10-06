import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
 
 import { MenuComponent } from 'src/share/menu/menu.component';
@NgModule({
  declarations: [
   
     MenuComponent
  
    
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
