import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

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

   this.loginForm.reset();
  }


  get emailid() { return this.loginForm.get('emailId'); }

  get password() { return this.loginForm.get('Password'); }



}
