import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterValidators } from '../validators/register-validator';
import { AuthService } from '../auth.service';
import { SignUp } from 'src/app/shared/logo/models/signUp.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private authService: AuthService){}
  firstName: FormControl = new FormControl('', [Validators.required, Validators.minLength(4)])
  lastName: FormControl = new FormControl('',[Validators.required, Validators.minLength(4)])
  email: FormControl = new FormControl('',[Validators.required, Validators.email])
  password: FormControl = new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/)])
  confirmPassword: FormControl = new FormControl('', Validators.required)
  
  registerForm: FormGroup = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword
  },[RegisterValidators.match('password','confirmPassword')])

  onSubmit() {
    if(!this.registerForm.valid){
      return
    }
    const user: SignUp = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value
    }
    this.authService.signUp(user)
  }
}
