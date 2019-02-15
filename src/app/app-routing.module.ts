import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent} from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { AccountDeleteComponent } from './account-delete/account-delete.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [
  { path:  '', redirectTo:  'accounts', pathMatch:  'full' },
  {
      path:  'accounts',
      component:  AccountListComponent,
  },
  {
    path:  'account-details/:id',
    component:  AccountDetailsComponent
  },
  {
      path:  'create-account',
      component:  AccountCreateComponent
  },
  {
    path:  'update-account',
    component:  AccountUpdateComponent
  },
  {
    path:  'delete-account',
    component:  AccountDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
