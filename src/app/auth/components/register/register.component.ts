import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { User } from 'src/app/shared/models/User.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private api: ApiService,private router: Router) { }



  registerForm:any;
  UserObj : User = new User();

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "emailId":new FormControl(null,[Validators.required,Validators.email]),
      "Password":new FormControl(null,[Validators.required]),
      "mobileNumber":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])
    });
  }

  submitData()
  {
   console.log(this.registerForm.value);

   this.UserObj.first_name = this.registerForm.value.firstName;
   this.UserObj.last_name = this.registerForm.value.lastName;
   this.UserObj.num_telephone = this.registerForm.value.mobileNumber;
   this.UserObj.email = this.registerForm.value.emailId;
   this.UserObj.motpasse = this.registerForm.value.Password;

   console.log(this.UserObj)

   this.api.addUser(this.UserObj)
    .subscribe(res=>{
      console.log(res);
      this.router.navigate(['/login'])
    },
    err=>{
      alert("something Went Wrong")
    })
   this.registerForm.reset();

  }

  get firstname() { return this.registerForm.get('firstName'); }

  get lastname() { return this.registerForm.get('lastName'); }

  get emailid() { return this.registerForm.get('emailId'); }

  get mobilenumber() { return this.registerForm.get('mobileNumber'); }

  get password() { return this.registerForm.get('Password'); }



}
