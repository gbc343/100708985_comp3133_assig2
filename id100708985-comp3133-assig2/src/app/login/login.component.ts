import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthService } from '../auth.service';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loading = false;
error: string;
User: any = {};
password = "";
username = "";

  constructor(private router: Router, private apollo: Apollo) { }

ngOnInit(): void {
let val = localStorage.getItem('isValidUser');
localStorage.setItem('isValidUser', 'true');

if(val != null && val == 'false') {
this.router.navigate(['/home']);
}
}

onSubmit(loginForm: NgForm): void {
this.username = loginForm.value.username;
this.password = loginForm.value.password;

if(this.username == "admin" && this.password == "admin") {
localStorage.setItem('isValidUser', 'true');


this.router.navigate(['/home'])
}
else {
localStorage.setItem('isValidUser', 'false');
alert('username or password invalid')
}


}

}