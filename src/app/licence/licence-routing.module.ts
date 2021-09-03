import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicTableComponent } from './components/lic-table/lic-table.component';

const routes: Routes = [
  { path: 'licences', component: LicTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenceRoutingModule { }
