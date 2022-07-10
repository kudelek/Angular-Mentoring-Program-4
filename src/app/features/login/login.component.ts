import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showEmailRequired: boolean = false;
  showPasswordRequired: boolean = false;

  data: any = {
    email: '',
    password: ''
  }

  onChangeEmail(value: string) {
    this.data.email = typeof value === "string" ? value : this.data.email;
    console.log('data', this.data);
  }

  onChangePassword(value: string) {
    this.data.password = typeof value === "string" ? value : this.data.password;
    console.log('data', this.data);
  }

}
