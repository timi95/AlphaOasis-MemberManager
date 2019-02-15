import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL  =  'http://localhost:8000';
  httpServer: HttpClient;
constructor(private  httpClient:  HttpClient) {
this.httpServer = httpClient;
}


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