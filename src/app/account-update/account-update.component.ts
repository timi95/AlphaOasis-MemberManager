import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

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
  updateForm: Object = {
    Name : 'Bob',
    email : 'bob@email.com',
    phone : '0987654321',
    industry : null,
    website : 'https://bob.github.io',
    description : 'A Bobby kind of guy',
    isActive : true,
  };
  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
  }
  updateAccount() {
    this.apiService.updateAccount(this.updateForm).subscribe((response) => { console.log(response); });
  }

}
