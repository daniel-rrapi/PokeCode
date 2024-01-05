import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  query: string = '';
  isUserLogged!: boolean;
  constructor(private router: Router, private authSrv: AuthService) {
    authSrv.isLoggedIn.subscribe((res) => {
      this.isUserLogged = res;
    });
  }

  ngOnInit(): void {}

  submitSearchForm(ev: Event) {
    ev.preventDefault();
    this.router.navigate(['pokedex/', this.query]);
  }

  logout() {
    this.authSrv.logout();
  }
}
