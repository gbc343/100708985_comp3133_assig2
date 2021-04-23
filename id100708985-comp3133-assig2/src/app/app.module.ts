import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQlModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";
import { SignupComponent } from './signup/signup.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HotelsComponent } from './hotels/hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    SignupComponent,
    BookingsComponent,
    HotelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQlModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
