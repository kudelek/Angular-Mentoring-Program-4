import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result, User } from 'src/app/models';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = "http://localhost:4000";
  private loggedInUser = {} as User;
  private isLoggedIn = false;

  constructor(private httpClient: HttpClient,
    private sessionStorage: SessionStorageService) {

  }

  authenticate(email: string, password: string) {
    return this.httpClient.post<Result>(`${this.baseUrl}/login`, {email, password})
  }

  getLoggedUser(token: string) {
    let options = { headers: {Authorization: token}}
    return this.httpClient.get<User>(`${this.baseUrl}/users/me`,)
  }

  setUser(token: string) {
    this.sessionStorage.isLoggedIn.next(true)
    this.sessionStorage.token.next(token)
  }

  logoutUser(): void {
    this.isLoggedIn = false;
  }
}
