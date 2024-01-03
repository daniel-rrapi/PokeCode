import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(body: Partial<User>) {
    const cleanUser = body;
    delete cleanUser.passwordConfirm;
    return this.http.post('http://localhost:3000/register', cleanUser);
  }
  signin(body: Partial<User>) {
    return this.http.post('http://localhost:3000/login', body )
  }
}
