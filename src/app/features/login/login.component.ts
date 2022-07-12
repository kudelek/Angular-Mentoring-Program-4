import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { emailValidator } from 'src/app/shared/directives/validateEmail';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    emailRegex: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/


  email = new FormControl('', [emailValidator(this.emailRegex)])
  password = new FormControl('')

  showEmailRequired: boolean = false;
  showPasswordRequired: boolean = false;

  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  })

  onChangeEmail(target: any) {
    this.loginForm.value.email = typeof target.value === "string" ? target.value : this.loginForm.value.email;
    console.log('loginForm.value', this.loginForm.value);
    console.log(target)
  }

  onChangePassword(value: string) {
    this.loginForm.value.password = typeof value === "string" ? value : this.loginForm.value.password;
    console.log('loginForm.value', this.loginForm.value);
  }

  onSubmit() {
    console.log(this.loginForm.value)
  }

}
