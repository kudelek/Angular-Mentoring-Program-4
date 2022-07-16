import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { SessionStorageService } from './auth/services/session-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userName?: string;
  title = 'courses-app';
  isLoggedIn: boolean = false;

  constructor(private router: Router,
    private sessionStorage: SessionStorageService, private authService: AuthService) {}

  ngOnInit(): void {
    console.log('init')
    this.sessionStorage.isLoggedIn.subscribe(res => this.isLoggedIn = res as boolean);
    this.sessionStorage.token.subscribe(res => {
      this.authService.getLoggedUser(res as string).subscribe(res => console.log('user: ',res))
    })
  }

  onLogInOut() {
    this.router.navigate(['/login']);
  }

}
