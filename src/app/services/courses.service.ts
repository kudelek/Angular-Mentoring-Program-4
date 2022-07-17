import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SessionStorageService } from '../auth/services/session-storage.service';
import { Course } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseUrl: string = "http://localhost:4000";
  courses = new Subject;

  constructor(private httpClient: HttpClient, private sessionService: SessionStorageService) { }
  token = this.sessionService.getToken()

  get(param: string): Observable<any> {
    return this.httpClient.get<Course[]>(`${this.baseUrl}/${param}`);
  }

  add(course: Course) {
    return this.httpClient.post<Course>(`${this.baseUrl}/add`, course, {headers: {Authorization: this.token as string}})
  }


}
