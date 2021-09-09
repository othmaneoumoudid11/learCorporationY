import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDemLicRoutingModule } from './list-dem-lic-routing.module';
import { ListDemLicAdmComponent } from './components/list-dem-lic-adm/list-dem-lic-adm.component';
import { ListDemLicUserComponent } from './components/list-dem-lic-user/list-dem-lic-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListDemLicAdmComponent,
    ListDemLicUserComponent
  ],
  imports: [
    CommonModule,
    ListDemLicRoutingModule,
    CommonModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ListDemLicModule { }
