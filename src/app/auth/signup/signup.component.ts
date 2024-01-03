import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { passwordMatchValidator } from 'src/app/validators/passwordMatch.validatoris';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  
  signUpForm = new FormGroup(
    {
      firstName: new FormControl('', Validators.min(2)),
      lastName: new FormControl('', Validators.min(2)),
      email: new FormControl('', Validators.email),
      password: new FormControl(
        '',
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'
        )
      ),
      passwordConfirm: new FormControl('', Validators.required),
      terms: new FormControl(),
    },
    //passwordMatchValidator
  );
  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}
  register() {
    if(this.signUpForm.value.password === this.signUpForm.value.passwordConfirm && this.signUpForm.value.terms){
    this.authSrv.signup(this.signUpForm.value).subscribe((data) => {
      this.router.navigate(['login'])
    }); 
  }else{
   alert("Password Sbagliata o terms false")
  }
  }
}
