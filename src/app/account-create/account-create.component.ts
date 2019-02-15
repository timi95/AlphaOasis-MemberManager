import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

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

    account  = {
    Name : 'Default',
    email : 'default@email.com',
    phone : '0987654321',
    industry : this.INDCHOICES.SOFTWARE,
    website : 'https://default.github.io',
    description : 'A Default kind of guy',
    isActive : true,
  };
  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
  }

  createAccount() {


    this.apiService.createAccount(this.account).subscribe((response) => { console.log(response); });


  }


}
