import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDemSofAdmComponent } from './components/list-dem-sof-adm/list-dem-sof-adm.component';

const routes: Routes = [
  { path: 'LDSAA', component: ListDemSofAdmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDemSofRoutingModule { }
