import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Result } from 'src/app/models';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = "http://localhost:4000";
  isLoggedIn = new BehaviorSubject(false);
  private isAuthorized$$ = new BehaviorSubject(false);
  isAuthorized$ = new Observable;
  isAuthorized = {isAuthorized$: this.isAuthorized$, isAuthorized$$: this.isAuthorized$$};

  constructor(private httpClient: HttpClient,
    private sessionStorage: SessionStorageService,
    private router: Router) {
  }

  authenticate(email: string, password: string) {
    return this.httpClient.post<Result>(`${this.baseUrl}/login`, {email, password})
  }

  getLoggedUser(token: string) {
    console.log('getLoggedUser')
    let options = { headers: {Authorization: token}}
    return this.httpClient.get<Result>(`${this.baseUrl}/users/me`, options)
  }

  setUser(token: string) {
    this.isAuthorized$$.next(true);
    this.sessionStorage.setToken(token);
  }

  logoutUser(): void {
    this.isAuthorized$$.next(false);
    this.sessionStorage.deleteToken();
    this.router.navigate(['/login']);
  }

  get isLogged$(): Observable<boolean> {
    return this.isAuthorized$$.pipe(map(value => !!value))
  }
}
