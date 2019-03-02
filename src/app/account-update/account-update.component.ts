import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/messages.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})


export class AccountUpdateComponent implements OnInit {
  INDCHOICES = {
    FINANCE : 'FINANCE',
    HEALTHCARE: 'HEALTHCARE',
    INSURANCE: 'INSURANCE',
    LEGAL: 'LEGAL',
    MANUFACTURING: 'MANUFACTURING',
    PUBLISHING: 'PUBLISHING',
    REAL_ESTATE: 'REAL ESTATE',
    SOFTWARE: 'SOFTWARE',
  };
  updateForm: Account = {
    Name : 'Default',
    email : 'default@email.com',
    phone : '1234567890',
    industry : null,
    website : 'default.github.io',
    description : 'Default............',
    isActive : true,
  };
  constructor(private messages: MessageService, private  apiService:  ApiService) { }

  ngOnInit() {
  }
  updateAccount() {
    this.apiService.updateAccount(this.updateForm).subscribe((response) => {
       console.log(response);
       alert('Update Successful !');
      },
      err => {
        console.log(err);
        this.messages.add(err);
      }
    );
  }


}
interface Account {
  id?: number;
  Name: string;
  email: string;
  phone: any;
  industry: string;
  website: string;
  description: string;
  isActive?: boolean;
}
