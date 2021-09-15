import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersAdmComponent } from './components/list-users-adm/list-users-adm.component';
import { RegisterAdmComponent } from './components/register-adm/register-adm.component';

const routes: Routes = [
  { path: 'UsersAdm', component: ListUsersAdmComponent},
  { path: 'RegAdm', component: RegisterAdmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
