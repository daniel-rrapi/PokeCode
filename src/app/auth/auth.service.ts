import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private $isLoggedIn = new BehaviorSubject(false);
  isLoggedIn = this.$isLoggedIn.asObservable();
  constructor(private http: HttpClient, private router: Router) {}
  signup(body: Partial<User>) {
    const cleanUser = body;
    delete cleanUser.passwordConfirm;
    return this.http.post('http://localhost:3000/register', cleanUser);
  }
  signin(body: Partial<User>) {
    return this.http.post('http://localhost:3000/login', body).pipe(
      tap((res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.$isLoggedIn.next(true);
      })
    );
  }
  verifyLogin() {
    const ls = localStorage.getItem('user');
    if (ls) {
      this.$isLoggedIn.next(true);
    } else {
      this.$isLoggedIn.next(false);
    }
  }
  logout() {
    localStorage.removeItem('user');
    this.$isLoggedIn.next(false);
    this.router.navigate(['']);
  }
}
