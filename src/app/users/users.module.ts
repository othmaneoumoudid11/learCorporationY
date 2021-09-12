import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersAdmComponent } from './components/list-users-adm/list-users-adm.component';


@NgModule({
  declarations: [
    ListUsersAdmComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
