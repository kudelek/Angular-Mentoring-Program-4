import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  creationDate: string = ''

  @Input()
  duration: number = 0

  @Input()
  authors: string[] = []

  getDuration(_duration: number) {
    return `${Math.floor(_duration/60)}:${_duration%60}`;
  }

}
