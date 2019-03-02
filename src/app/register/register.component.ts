import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/messages.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registrationForm: Admin = {
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: ''

  };

  constructor(private messages: MessageService, private apiservice: ApiService ) { }

  ngOnInit() {
  }

   RegisterUser() {
    this.apiservice.register(this.registrationForm).subscribe((response) => {
       console.log(response);
       alert('Registration Successful !');
      },
      err => {
        console.log(err);
        this.messages.add(err);
      }
    );
  }

  refreshToken() {
    this.apiservice.refreshToken();
  }

  logout() {
    this.apiservice.logout();
  }

}

interface Admin {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
}
