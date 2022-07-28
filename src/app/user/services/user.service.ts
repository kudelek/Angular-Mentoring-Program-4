import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:4000/users/";

  constructor(private httpClient: HttpClient) { }

  get(param: string, token: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}${param}`, { headers: {Authorization: token}})
  }

}
