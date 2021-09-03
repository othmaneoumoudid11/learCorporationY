import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenceRoutingModule } from './licence-routing.module';
import { LicTableComponent } from './components/lic-table/lic-table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LicTableComponent
  ],
  imports: [
    CommonModule,
    LicenceRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class LicenceModule { }
