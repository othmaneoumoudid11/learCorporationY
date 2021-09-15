import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { DemAprvLic } from 'src/app/shared/models/DemAprvLic.nodel';
import { AUTH_TEKEN_KEY, AUTH_USER_FIRST_NAME, AUTH_USER_LAST_NAME, AUTH_USER_TYPE } from 'src/app/state/CurrentUser';

@Component({
  selector: 'app-list-dem-lic-adm',
  templateUrl: './list-dem-lic-adm.component.html',
  styleUrls: ['./list-dem-lic-adm.component.css']
})

export class ListDemLicAdmComponent implements OnInit{

  formValue ! : FormGroup;
  DemAprvLicObj : DemAprvLic = new DemAprvLic();
  DemAprLicData ! : DemAprvLic[];
  showAdd ! : boolean;
  showUpdate ! : boolean;
  p: number = 1;
  term: any;
   public typeCompte !: string;
   public lastName ! : string;
   public firstName ! : string;
   public KeyUser : number = 0;


  constructor(private api : ApiService, private router: Router) {}


  ngOnInit(): void {

    this.typeCompte = sessionStorage.getItem(AUTH_USER_TYPE)!;
    this.lastName = sessionStorage.getItem(AUTH_USER_LAST_NAME)!;
    this.firstName = sessionStorage.getItem(AUTH_USER_FIRST_NAME)!;
    this.KeyUser= +sessionStorage.getItem(AUTH_TEKEN_KEY)!;

    this.getAllDemandes();

  }

  
  getAllDemandes() {
    this.api.listeDemAprvLic()
    .subscribe(res=>{
      this.DemAprLicData = res;
      console.log(res)
    },(error :HttpErrorResponse)=>{
      alert(error.message);
    })
  }


  onAccept(row: any){
    this.api.AprDemLic(row.id_Approv)
    .subscribe(res => {
      alert("Demmad Approved succefully");
      this.getAllDemandes();
    }, err=> {
      alert("Something went wrong");
    })

  }

  onRefuse(row: any){
    this.api.RefDemLic(row.id_Approv)
    .subscribe(res => {
      alert("Demmad Refused succefully");
      this.getAllDemandes();
    }, err=> {
      alert("Something went wrong");
    })

  }


  onDeconnexion(){
    sessionStorage.removeItem(AUTH_TEKEN_KEY);
    sessionStorage.removeItem(AUTH_USER_TYPE);
    sessionStorage.removeItem(AUTH_USER_LAST_NAME);
    sessionStorage.removeItem(AUTH_USER_FIRST_NAME);
    this.router.navigateByUrl("/");
  }


}



