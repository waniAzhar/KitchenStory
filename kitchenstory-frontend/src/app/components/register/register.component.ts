import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm:FormGroup;

  constructor(private FormBuilder:FormBuilder, private auth:AuthService, private router:Router) {
    this.registerForm = this.FormBuilder.group({
      firstname:['', [Validators.required]],
      lastname:['', [Validators.required]],
      age:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    });
   }
   registerOnSubmit(registerform:any){
     if(this.registerForm.valid){
    this.auth.addUsers(this.registerForm.value).subscribe(res=>{
      console.log(res);
    });
    alert("signup completed");

    this.router.navigateByUrl("/login");

  } else{
    console.log("register form invalid")
  }
   }
  ngOnInit(): void {
  }

}
