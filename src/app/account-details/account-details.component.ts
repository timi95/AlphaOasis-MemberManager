import { Component, OnInit, Input } from '@angular/core';
import { AccountListComponent } from '../account-list/account-list.component';
import { ApiService } from 'src/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/services/messages.service';
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  private account: any = 1 ;
  private editable = false;

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
    id : this.route.snapshot.paramMap.get('id'),
    Name : '',
    email : '',
    phone : '',
    industry : null,
    website : '',
    description : '',
    isActive : true,
  };

  constructor (private messages: MessageService, private route: ActivatedRoute, private apiService:  ApiService ) { }

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.apiService.getAccountDetails(id).subscribe((response) => {
      this.account = response;
      console.log(response);
    },
    err => {
      console.log(err);
      this.messages.add(err);
    }
    );
  }


  updateAccount() {
    this.apiService.updateAccount(this.updateForm).subscribe((response) => {
       console.log(response);
      },
      err => {
        console.log(err);
        this.messages.add(err);
      }
    );
    this.account = this.updateForm ;
  }


  toggleEdit() {
    this.editable = !this.editable ;
  }

}
