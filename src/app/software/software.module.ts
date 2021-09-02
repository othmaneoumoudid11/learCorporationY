import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareRoutingModule } from './software-routing.module';
import { SofTableComponent } from './components/sof-table/sof-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    SofTableComponent
  ],
  imports: [
    CommonModule,
    SoftwareRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SoftwareModule { }
