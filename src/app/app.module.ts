import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTPModule } from '@angular/http'

import { AuthService } from './auth.service'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HTTPModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }


//https://api.instagram.com/oauth/authorize/?client_id=15071ab4e6b44a0f8a414c9224afdee5&redirect_uri=http://localhost:4200&response_type=code
//ea5c947bc86c44b4b077ef96880714df
