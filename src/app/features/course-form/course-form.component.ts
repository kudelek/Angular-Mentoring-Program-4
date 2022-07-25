import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/models';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor(
    private router: Router,
    private coursesStoreService: CoursesStoreService
  ) { }

  ngOnInit(): void {
  }

  title = new FormControl('')
  descriptioon = new FormControl('')
  duration = new FormControl('', Validators.compose([Validators.min(10)]))
  authors = new FormControl([])
  creationDate = new FormControl('')
  id = new FormControl('')


  courseForm = new FormGroup({
    title: this.title,
    description: this.descriptioon,
    duration: this.duration,
    authors: this.authors,
    creationDate: this.creationDate,
    id: this.id,
  })

  course: any = {
    duration: 0,
    authors: ['A','B','C']
  }

  authorsList: any[] = [
    {name: 'A'},
    {name: 'B'},
    {name: 'C'},
    {name: 'D'}
  ]

  onSubmit() {
    console.log(this.courseForm.errors)
    console.log(this.courseForm.value);
    this.coursesStoreService.addCourse(this.courseForm.value as Course)

    //this.router.navigate(['/'])
  }

  onChangeTitle(target: any) {
    this.courseForm.value.title = typeof target.value === "string" ? target.value : this.courseForm.value.title;
    console.log('courseForm.value', this.courseForm.value);
    console.log(target)
  }

  onChangeDuration(target: any) {
    this.courseForm.value.duration = typeof target.value === "string" ? target.value : this.courseForm.value.duration;
    console.log('courseForm.value', this.courseForm.value);
    console.log(target)
  }



}
