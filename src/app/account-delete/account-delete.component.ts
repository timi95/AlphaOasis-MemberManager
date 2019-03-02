import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { MessageService } from 'src/services/messages.service';

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.css']
})
export class AccountDeleteComponent implements OnInit {
  constructor(private messages: MessageService, private  apiService:  ApiService) { }
  PK: number;

  ngOnInit() {
  }

  deleteAccount() {
    this.apiService.getAccountDetails(this.PK).subscribe((response) => {
      console.log(response);
      this.apiService.deleteAccount(response).subscribe((response_) => { console.log(response_); });
      alert('Deletion Successful !');
    },
    err => {
      console.log(err);
      this.messages.add(err);
    }
    );
    // this.apiService.deleteAccount().subscribe((response) => { console.log(response); });
  }

}
