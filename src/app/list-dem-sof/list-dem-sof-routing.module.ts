import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDemSofAdmComponent } from './components/list-dem-sof-adm/list-dem-sof-adm.component';
import { ListDemSofUserComponent } from './components/list-dem-sof-user/list-dem-sof-user.component';

const routes: Routes = [
  { path: 'LDSAA', component: ListDemSofAdmComponent},
  { path: 'LDSAU', component: ListDemSofUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDemSofRoutingModule { }
