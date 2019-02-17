import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent} from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { AccountDeleteComponent } from './account-delete/account-delete.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path:  '', redirectTo:  'login', pathMatch:  'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
      path:  'accounts',
      component:  AccountListComponent,
      canActivate: [AuthGuard],
  },
  {
    path:  'account-details/:id',
    component:  AccountDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
      path:  'create-account',
      component:  AccountCreateComponent,
      canActivate: [AuthGuard],
  },
  {
    path:  'update-account',
    component:  AccountUpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path:  'delete-account',
    component:  AccountDeleteComponent,
    canActivate: [AuthGuard],
  },
  { path:  '**', redirectTo:  'login', pathMatch:  'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
