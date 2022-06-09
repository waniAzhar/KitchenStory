import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private auth: AuthService,private router:Router) {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      rememberMe:['', [Validators.required]]
    });
  }

  public onSubmit(loginForm:any){
    if (this.loginForm.valid) {
      console.log(loginForm.value);
      this.auth.getUsers().subscribe(data =>{
        console.log(data);

      }

        )
        this.passOrNo();
    }else{
      console.log("invalid form");
    }
  }
  user:any;

  passOrNo(){
    for(let user of this.user){
      if(this.loginForm.value.email == user.email && this.loginForm.value.password == user.password){
        console.log("pass and email");
        if(user.admin == false){
        this.router.navigateByUrl("/mainpage");
      } else{
        this.router.navigateByUrl("/admin");
      }
      }

    }
  }

  ngOnInit(): void {
    this.auth.getUsers().subscribe(data =>{
      this.user = data;
      console.log(this.user);

    });


  }


  hasError(fieldName:string){
    let field = this.loginForm.get(fieldName)
    return (field?.invalid && field?.touched && field?.errors)
  }

  get form(){
    return this.loginForm.controls
  }

  get email(){
    return this.loginForm.controls['email'];
  }

  get password(){
    return this.loginForm.controls['password'];
  }
  get rememberMe(){
    return this.loginForm.controls['rememberMe'];
  }
}
