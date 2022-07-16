import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courses-app';

  constructor(private router: Router) {}

  onLogInOut() {
    this.router.navigate(['/login']);
  }

  isLoggedIn: boolean = true;
}
