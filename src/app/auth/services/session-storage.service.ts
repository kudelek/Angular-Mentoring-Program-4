import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  isLoggedIn = new Subject;

  private window: Window

  constructor() {this.window = window }

  setToken(token: string) {
    console.log('token', token)
    return this.window.sessionStorage.setItem("token", token);
  }

  getToken() {
    return this.window.sessionStorage.getItem("token");
  }

  deleteToken() {
    return this.window.sessionStorage.removeItem("token");
  }

}
