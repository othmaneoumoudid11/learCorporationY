import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersAdmComponent } from './components/list-users-adm/list-users-adm.component';

const routes: Routes = [
  { path: 'UsersAdm', component: ListUsersAdmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
