import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { emailValidator } from 'src/app/shared/directives/validator.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl('', [emailValidator()])
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

  onChangePassword(target: any) {
    this.loginForm.value.password = typeof target.value === "string" ? target.value : this.loginForm.value.password;
    console.log('loginForm.value', this.loginForm.value);
    console.log(target)
  }

  onSubmit() {
    let values = this.loginForm.value;

    this.showEmailRequired = false;
    this.showPasswordRequired = false;

    if (values.email?.length === 0 || values.password?.length === 0){
      if (values.email?.length === 0)
        this.showEmailRequired = true;
      if (values.password?.length === 0)
        this.showPasswordRequired = true;
      return;
    }


    console.log(this.loginForm.value)
  }

}
