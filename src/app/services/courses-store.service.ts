import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  courses = new Subject;

  constructor(private coursesService: CoursesService) { }


  getAll() {
    console.log('getAll');
    return this.coursesService.get('courses/all');
  }

  getCourse(id: string) {
    return this.coursesService.get(`courses/${id}`)
  }
}
