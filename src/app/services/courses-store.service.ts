import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Course } from '../models';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  courses = new Subject;

  constructor(private coursesService: CoursesService) { }


  getAll() {
    console.log('getAll');
    return this.coursesService.get('all');
  }

  getCourse(id: string) {
    return this.coursesService.get(id)
  }

  addCourse(course: Course) {
    return this.coursesService.add(course)
  }
}
