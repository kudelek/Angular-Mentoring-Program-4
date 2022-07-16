import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() { }

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
    console.log("Show course", this.course);
  }

}
