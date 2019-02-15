import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  private  account_list:  Array<object> = [];
  constructor(private  apiService:  ApiService) { }

    ngOnInit() {
        // if (this.account_list.length < 1) {
            this.getAccounts();
        // }
    }
    getAccounts() {
      this.apiService.getAccounts().subscribe((data:  Array<object>) => {
          this.account_list  =  data;
          console.log(data);
      });
    }

  SearchAccounts(entry) {
    // let localArray = [] ;
    console.log('Searching Accounts');
    console.log('found:', entry.value);
    this.account_list = this.account_list.filter( result => [
        
    ]
    );
  }


}
