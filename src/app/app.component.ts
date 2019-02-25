import { Component, OnInit } from '@angular/core';
import {throwError} from 'rxjs';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any;
  title = 'alpha-oasis';

  constructor( public apiservice: ApiService ) { }

  ngOnInit() { }

}
