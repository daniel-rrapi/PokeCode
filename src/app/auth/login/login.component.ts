import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl()
    }
  )
  constructor(private authSrv: AuthService, private router: Router ) {
    
   }

  ngOnInit(): void {
  }
  login(){
    this.authSrv.signin(this.loginForm.value).subscribe((res) => {
      localStorage.setItem('user', JSON.stringify(res)),
      this.router.navigate(['pokedex'])

    })
  }

}
