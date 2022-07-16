import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Course } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseUrl: string = "http://localhost:4000";
  courses = new Subject;

  constructor(private httpClient: HttpClient) { }

  get(param: string): Observable<any> {
    return this.httpClient.get<Course[]>(`${this.baseUrl}/${param}`);
  }




}
