import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LicenceModule } from './licence/licence.module';
import { ListDemLicModule } from './list-dem-lic/list-dem-lic.module';
import { ListDemSofModule } from './list-dem-sof/list-dem-sof.module';
import { SoftwareModule } from './software/software.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    SoftwareModule,
    LicenceModule,
    ListDemSofModule,
    ListDemLicModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
