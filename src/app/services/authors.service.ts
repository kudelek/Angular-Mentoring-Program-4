import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService{
  baseUrl: string = "http://localhost:4000";

  constructor(private httpClient: HttpClient) { }

  get(param: string): any {
    return this.httpClient.get<Author[]>(`${this.baseUrl}/${param}`)
    .subscribe({
      next: data => data,
      error: (err: HttpErrorResponse) => console.log('Got error: ', err)}
    );
  }

}
