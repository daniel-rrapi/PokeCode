import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  query: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {}

  submitSearchForm(ev: Event) {
    ev.preventDefault();
    this.router.navigate(['pokedex/', this.query]);
  }
}
