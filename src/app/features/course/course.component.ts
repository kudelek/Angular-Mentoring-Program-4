import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/models';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CoursesStoreService]
})
export class CourseComponent implements OnInit {
  subscription?: Subscription;
  course: Course = {
    id: "",
    title: "",
    description: "",
    creationDate: "",
    duration: 0,
    authors: []
  }
  id: string = '';
  isLoading: boolean = true;

  constructor(private coursesService: CoursesStoreService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      let id = param['id'];
      console.log('id',id)
      this.subscription = this.coursesService.getCourse(id).subscribe(course => this.course = course.result)
    })
  }


}
