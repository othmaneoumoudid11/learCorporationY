import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { AUTH_TEKEN_KEY, AUTH_USER_FIRST_NAME, AUTH_USER_LAST_NAME, AUTH_USER_TYPE } from 'src/app/state/CurrentUser';


@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.css']
})
export class RestPasswordComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  loginForm:any;

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      "emailId":new FormControl(null,[Validators.required,Validators.email]),
      "Password":new FormControl(null,[Validators.required])
    });
  }

  submitData()
  {    
   console.log(this.loginForm.value);
   this.api.VerifieCompte(this.loginForm.value.emailId, this.loginForm.value.Password)
    .subscribe(res=>{
      console.log(res);

      if(res==-1){
        this.router.navigate(['/login'])
        console.log('X-1X');
      }else if(res==1){
        sessionStorage.setItem(AUTH_USER_TYPE,"CU");
        console.log('X1X');
        this.router.navigate(['/softwares'])
      }else if(res==2){
        sessionStorage.setItem(AUTH_USER_TYPE,"CM");
        console.log('X2X');
        this.router.navigate(['/softwares'])
      }

      
    },
    err=>{
      alert("something Went Wrong")
    })

    console.log(this.loginForm.value.emailId)
    this.onChercherCompte(this.loginForm.value.emailId,this.loginForm.value.Password);
    
    this.loginForm.reset();
  }

  public onChercherCompte(email: string, password: string){
    this.api.ChercherCompte(email,password)
    .subscribe(data=>{
        console.log('X2X');
        console.log(data);
        sessionStorage.setItem(AUTH_TEKEN_KEY,data.id_compte.toString());
        sessionStorage.setItem(AUTH_USER_FIRST_NAME,data.first_name);
        sessionStorage.setItem(AUTH_USER_LAST_NAME,data.last_name);
        console.log(data.last_name);
    });
  }


  get emailid() { return this.loginForm.get('emailId'); }

  get password() { return this.loginForm.get('Password'); }



}
