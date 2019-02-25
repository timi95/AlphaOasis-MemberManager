import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user = {
    'username': '',
    'password': ''
} ;
  // email: string ;
  // username: string ;
  // password: string ;

  constructor( public apiservice: ApiService ) { }

  ngOnInit() { }

  login() {
    this.apiservice.login({'username': this.user.username, 'password': this.user.password});
  }

  refreshToken() {
    this.apiservice.refreshToken();
  }

  logout() {
    this.apiservice.logout();
  }

}
