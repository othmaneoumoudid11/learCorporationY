import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDemSofRoutingModule } from './list-dem-sof-routing.module';
import { ListDemSofAdmComponent } from './components/list-dem-sof-adm/list-dem-sof-adm.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListDemSofAdmComponent
  ],
  imports: [
    CommonModule,
    ListDemSofRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ListDemSofModule { }
