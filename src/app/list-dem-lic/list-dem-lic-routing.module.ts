import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDemLicAdmComponent } from './components/list-dem-lic-adm/list-dem-lic-adm.component';
import { ListDemLicUserComponent } from './components/list-dem-lic-user/list-dem-lic-user.component';

const routes: Routes = [
  { path: 'LDLAA', component: ListDemLicAdmComponent},
  { path: 'LDLAU', component: ListDemLicUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDemLicRoutingModule { }
