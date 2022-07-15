import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/directives/validator.directive';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor() { }

  formName = new FormControl('',[Validators.required, Validators.minLength(6)]);
  formEmail = new FormControl('',[Validators.required, emailValidator()]);
  formPassword = new FormControl('',[Validators.required]);

  ngOnInit(): void {

  this.registrationForm = new FormGroup({
    name: this.formName,
    email: this.formEmail,
    password: this.formPassword
  })
  }




  errorTextName: string = '';
  errorTextEmail: string = '';
  errorTextPassword: string = '';

  isEmpty(field: string) {
    console.log(field.length)
    return field.length === 0;
  }

  onChangeName(target: any) {
    this.registrationForm.value.name = typeof target.value === "string" ? target.value : this.registrationForm.value.name;
    console.log('registrationForm.value', this.registrationForm.value);
    console.log(target);
  }

  onChangeEmail(target: any) {
    this.registrationForm.value.email = typeof target.value === "string" ? target.value : this.registrationForm.value.email;
    console.log('registrationForm.value', this.registrationForm.value);
    console.log(target);
  }

  onChangePassword(target: any) {
    this.registrationForm.value.password = typeof target.value === "string" ? target.value : this.registrationForm.value.password;
    console.log('registrationForm.value', this.registrationForm.value);
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }



  onSubmit() {
    if (this.registrationForm.invalid) {
      console.log('invalid');
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
      return;
    }


    console.log(this.registrationForm.value)
  }

}
