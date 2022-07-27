import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from 'src/app/models';
import { SessionStorageService } from '../auth/services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService{
  baseUrl: string = "http://localhost:4000/authors";

  constructor(private httpClient: HttpClient, private sessionService: SessionStorageService) { }
  token = this.sessionService.getToken();

  get(param: string): any {
    return this.httpClient.get<Author[]>(`${this.baseUrl}/${param}`)
    .subscribe({
      next: data => data,
      error: (err: HttpErrorResponse) => console.log('Got error: ', err)}
    );
  }

  put(param: string, name: string): any {
    return this.httpClient.put<Author>(`${this.baseUrl}/${param}`, {name}, {headers: {Authorization: this.token as string}})
  }

}
