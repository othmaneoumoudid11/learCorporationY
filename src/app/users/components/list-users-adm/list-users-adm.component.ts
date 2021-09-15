import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { DemAprvLic } from 'src/app/shared/models/DemAprvLic.nodel';
import { User } from 'src/app/shared/models/User.model';
import { AUTH_TEKEN_KEY, AUTH_USER_FIRST_NAME, AUTH_USER_LAST_NAME, AUTH_USER_TYPE } from 'src/app/state/CurrentUser';

@Component({
  selector: 'app-list-users-adm',
  templateUrl: './list-users-adm.component.html',
  styleUrls: ['./list-users-adm.component.css']
})

export class ListUsersAdmComponent implements OnInit{

  formValue ! : FormGroup;
  UsersObj : User = new User();
  UsersData ! : User[];
  userData ! : User;
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

    this.getUsers();

  }

  
  getUsers() {
    this.api.getUsers()
    .subscribe(res=>{
      this.UsersData = res;
      console.log(res)
    },(error :HttpErrorResponse)=>{
      alert(error.message);
    })
  }




  DeleteUser(row: any){
    this.api.deleteUser(row.id_Approv)
    .subscribe(res => {
      alert("Demmad Approved succefully");
      this.getUsers();
    }, err=> {
      alert("Something went wrong");
    })

  }

  UpdateUser(row: any){
    this.api.updateUser(row)
    .subscribe(res => {
      this.userData = res;
      alert("Demmad Refused succefully");
      this.getUsers();
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



