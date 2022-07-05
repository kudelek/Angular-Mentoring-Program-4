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
  title: string = ''

  @Input()
  description: string = ''

  // @Input()
  // creationDate: Date =

  @Input()
  duration: number = 0

  @Input()
  authors: string[] = []

}
