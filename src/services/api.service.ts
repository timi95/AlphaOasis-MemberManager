import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService { // JWT authentication

// http options used for making API calls
private httpOptions: any;

// the actual JWT token
public token: string;

// the token expiration date
public token_expires: Date;

// the username of the logged in user
public username: string;

// error messages received from the login attempt
public errors: any = [];


  API_URL  =  'http://localhost:8000';
  httpServer: HttpClient;

  constructor(private  httpClient:  HttpClient) {
      this.httpServer = httpClient;
      this.httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
  }


// Registration
public register( UserDetails ) {
  return this.httpClient.post(`${this.API_URL}/register/`, UserDetails );
}

// Uses http.post() to get an auth token from djangorestframework-jwt endpoint
public login(user) {
  this.httpClient.post(`${this.API_URL}/api-token-auth/`, JSON.stringify(user), this.httpOptions).subscribe(
    data => {
      console.log(data);
      this.updateData(data['token']);
    },
    err => {
      this.errors = err['error'];
      console.log(this.errors);
      console.log(err);
    }
  );
}


// Refreshes the JWT token, to extend the time the user is logged in
public refreshToken() {
  this.httpClient.post(`${this.API_URL}/api-token-refresh/`, JSON.stringify({token: this.token}), this.httpOptions).subscribe(
    data => {
      console.log(data);
      this.updateData(data['token']);
      console.log(data['token']);
    },
    err => {
      this.errors = err['error'];
      console.log(this.errors);
    }
  );
}

// Logout
public logout() {
  this.token = null;
  this.token_expires = null;
  this.username = null;
}

// Update
private updateData(token) {
  this.token = token;
  this.errors = [];

  // decode the token to read the username and expiration timestamp
  const token_parts = this.token.split(/\./);
  const token_decoded = JSON.parse(window.atob(token_parts[1]));
  this.token_expires = new Date(token_decoded.exp * 1000);
  this.username = token_decoded.username;
}








// ******************** // C R U D // ******************** //
 getAccounts() {
    return  this.httpServer.get(`${this.API_URL}/accounts`);
}

 getAccountDetails(ID) {
  return this.httpServer.get(`${this.API_URL}/accounts/${ID}/details`);
}

 createAccount(account) {
  return  this.httpServer.post(`${this.API_URL}/accounts/`, account);
}

 updateAccount(account) {
  return this.httpServer.put(`${this.API_URL}/accounts/${account.id}/update`, account);
}

 deleteAccount(account) {
  return this.httpServer.delete(`${this.API_URL}/accounts/${account.id}/delete`, account);
}

}
