import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/messages.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registrationForm: Object = {
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: ''

  };

  constructor(private messages: MessageService, private apiservice: ApiService ) { }

  ngOnInit() {
  }

  private RegisterUser() {
    this.apiservice.register(this.registrationForm).subscribe((response) => {
       console.log(response);
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
