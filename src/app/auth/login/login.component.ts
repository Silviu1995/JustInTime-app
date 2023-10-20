import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { SignIn } from 'src/app/shared/logo/models/signUp.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(private authService: AuthService){}
email: FormControl = new FormControl('', [Validators.required, Validators.email])
password: FormControl = new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(14)])

loginForm: FormGroup = new FormGroup({
  email: this.email,
  password: this.password
})
onLogin() {
  if(!this.loginForm.valid){
    return
  }
  const user: SignIn = {
    email: this.email.value,
    password: this.password.value
  }
  this.authService.signIn(user)
}
}
