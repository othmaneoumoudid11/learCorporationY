import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SofTableComponent } from './components/sof-table/sof-table.component';

const routes: Routes = [
  { path: 'softwares', component: SofTableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareRoutingModule { }
