import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterValidators } from '../validators/register-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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
    console.log(this.registerForm.value)
  }
}
