import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersAdmComponent } from './components/list-users-adm/list-users-adm.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterAdmComponent } from './components/register-adm/register-adm.component';


@NgModule({
  declarations: [
    ListUsersAdmComponent,
    RegisterAdmComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class UsersModule { }
