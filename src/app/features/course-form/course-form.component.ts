import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  title = new FormControl('')
  descriptioon = new FormControl('')
  duration = new FormControl('', Validators.compose([Validators.min(1)]))
  authors = new FormControl('')

  courseForm = new FormGroup({
    title: this.title,
    description: this.descriptioon,
    duration: this.duration,
    authors: this.authors
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
    console.log(this.courseForm.value);
    this.router.navigate(['/'])
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
