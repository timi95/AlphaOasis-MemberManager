import { Component, OnInit, Input } from '@angular/core';
import { AccountListComponent } from '../account-list/account-list.component';
import { ApiService } from 'src/services/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  private account: any = 1 ;
  constructor (private route: ActivatedRoute, private apiService:  ApiService ) { }

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.apiService.getAccountDetails(id).subscribe((response) => {
      this.account = response;
      console.log(response);
    }
    );
  }

}
