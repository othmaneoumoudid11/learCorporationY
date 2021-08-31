import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { User } from 'src/app/shared/models/User.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiService) { }

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

      if(res==1){
        sessionStorage.setItem(AUTH_USER_TYPE,"CC");
      }else if(res==3){
        sessionStorage.setItem(AUTH_USER_TYPE,"CA");
      }else if(res==2){
        sessionStorage.setItem(AUTH_USER_TYPE,"CM");
      }
      
    },
    err=>{
      alert("something Went Wrong")
    })

   this.loginForm.reset();
  }


  get emailid() { return this.loginForm.get('emailId'); }

  get password() { return this.loginForm.get('Password'); }



}
