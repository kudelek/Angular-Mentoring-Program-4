import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';
import { emailValidator } from 'src/app/shared/directives/validator.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    AuthService
  ]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private sessionStorage: SessionStorageService) { }

  ngOnInit(): void {
  }

  subscription = new Subscription;

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
  }

  onChangePassword(target: any) {
    this.loginForm.value.password = typeof target.value === "string" ? target.value : this.loginForm.value.password;
  }

  onSubmit() {
    // let values = this.loginForm.value;

    // this.showEmailRequired = false;
    // this.showPasswordRequired = false;

    // if (values.email?.length === 0 || values.password?.length === 0){
    //   if (values.email?.length === 0)
    //     this.showEmailRequired = true;
    //   if (values.password?.length === 0)
    //     this.showPasswordRequired = true;
    //   return;
    // }

    this.subscription = this.authService.authenticate(this.loginForm.value.email as string, this.loginForm.value.password as string).subscribe(res => {
      if(res.successful){
        console.log('login res', res)
        this.authService.setUser(res.result);
        this.router.navigate(['courses']);
      }

    })
    console.log(this.loginForm.value)
  }

}
