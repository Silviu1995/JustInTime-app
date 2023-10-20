import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignIn, SignUp } from '../shared/logo/models/signUp.model';
import {tap} from 'rxjs/operators'
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

    signUp(user:SignUp) {
     return this.http.post('http://localhost:3000/auth/signup',
      {
        firstName: user.firstName,
        lastName:user.lastName,
        email: user.email,
        password: user.password,
        role: 'USER'
      }).pipe(
        catchError(error => {
          console.error('Error:', error);
          throw error; 
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
    }

    signIn(user: SignIn) {
      return this.http.post('http://localhost:3000/auth/signin',
      {
        email: user.email,
        password: user.password,
      }).pipe(
        catchError(error => {
          console.error('Error:', error);
          throw error; 
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
    }
}
