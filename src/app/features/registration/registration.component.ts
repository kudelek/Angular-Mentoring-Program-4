import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  registrationForm = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password
  })

  showRequired = {
    name: false,
    email: false,
    password: false
  }


  showNameRequired: boolean = false;
  showEmailRequired: boolean = false;
  showPasswordRequired: boolean = false;

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

  onSubmit() {
    console.log(this.registrationForm.value)
  }

}
