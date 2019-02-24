import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from 'src/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private apiService: ApiService, public jwtHelper: JwtHelperService) { }



  public isAuthenticated(): boolean {

    const token = this.apiService.token;

    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

}
