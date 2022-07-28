import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  providers: [CoursesStoreService]
})
export class CourseCardComponent implements OnInit {

  constructor(private coursesService: CoursesStoreService, private router: Router) { }

  ngOnInit(): void {
  }

  @Input()
  course: any;

  @Input()
  isEditable: boolean = true

  onDelete() {
    console.log("Delete course", this.course);
  }

  onEdit() {
    console.log("Edit course", this.course);
  }

  onShowCourse() {
    console.log(this.course.id)
    this.router.navigate([`/courses`,this.course.id], )
  }

}
