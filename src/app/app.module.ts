import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { AccountDeleteComponent } from './account-delete/account-delete.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgZorroAntdModule, NZ_I18N, en_GB } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { MessagesComponent } from './messages/messages.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountCreateComponent,
    AccountUpdateComponent,
    AccountDeleteComponent,
    AccountDetailsComponent,
    LoginComponent,
    RegisterComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_GB }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
