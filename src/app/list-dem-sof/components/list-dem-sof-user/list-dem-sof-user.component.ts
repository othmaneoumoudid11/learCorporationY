import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { DemAprvSOf } from 'src/app/shared/models/DemAprvSof.model';
import { AUTH_TEKEN_KEY, AUTH_USER_FIRST_NAME, AUTH_USER_LAST_NAME, AUTH_USER_TYPE } from 'src/app/state/CurrentUser';

@Component({
  selector: 'app-list-dem-sof-user',
  templateUrl: './list-dem-sof-user.component.html',
  styleUrls: ['./list-dem-sof-user.component.css']
})

export class ListDemSofUserComponent implements OnInit{

  formValue ! : FormGroup;
  DemAprSofObj : DemAprvSOf = new DemAprvSOf();
  DemAprSofData ! : DemAprvSOf[];
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
    this.api.listeDemAprv()
    .subscribe(res=>{
      this.DemAprSofData = res;
      console.log(res)
    },(error :HttpErrorResponse)=>{
      alert(error.message);
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


