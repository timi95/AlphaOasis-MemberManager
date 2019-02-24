import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/messages.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})

export class AccountListComponent implements OnInit {

  private  account_list:  Array<Account> = [];
  constructor(private messages: MessageService, private  apiService:  ApiService) { }

    ngOnInit() {
        // if (this.account_list.length < 1) {
            this.getAccounts();
        // }
    }
    getAccounts() {
      this.apiService.getAccounts().subscribe((data:  Array<Account>) => {
          this.account_list  =  data;
          console.log(data);
      },
      err => {
        console.log(err);
        this.messages.add(err);
      }
    );
    }

  SearchAccounts(entry) {
    // let localArray = [] ;
    console.log('Searching Accounts');
    console.log('found:', entry.value);
    // Filtering attempt, might need and interface to assert the type of object in account_list
    this.account_list = this.account_list.filter( account => account.Name.includes(entry.value) );
    if ( !this.account_list.length) {
      this.getAccounts();
    }
  }


}
export  interface Account {
  id: string;
  Name: string;
  email: string;
  phone: string;
  industry: string;
  website: string;
  description: string;
  isActive: boolean;
}
