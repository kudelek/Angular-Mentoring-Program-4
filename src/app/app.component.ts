import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './auth/services/auth.service';
import { SessionStorageService } from './auth/services/session-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Window]
})
export class AppComponent implements OnInit {
  user = new Observable;
  title = 'courses-app';
  subscription = new Subscription;
  isLoggedIn: boolean = false;
  userName?: string;

  constructor(private router: Router,
    private sessionStorage: SessionStorageService, public authService: AuthService) {
      this.subscription = this.authService.isLoggedIn.subscribe(res => {
        this.isLoggedIn = res as boolean
        console.log('constructor isLoggedIn', res)
      });

    }

  ngOnInit(): void {
    this.user = this.authService.getLoggedUser(this.sessionStorage.getToken() as string)
    this.authService.getLoggedUser(this.sessionStorage.getToken() as string).subscribe(res => {
      if (res.successful) {
        console.log('init res', res)
        this.userName = res.result.name
        this.authService.isLoggedIn.next(true)
      }
    })
  }

  onLogInOut() {
    this.authService.logoutUser();
  }

}
