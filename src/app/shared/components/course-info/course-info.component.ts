import { Component, Input, OnInit } from '@angular/core';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  constructor(public authorsService: AuthorsStoreService) { }

  ngOnInit(): void {
  }

  @Input()
  creationDate: string = ''

  @Input()
  duration: string = '0'

  @Input()
  authors: string[] = []

  getDuration(_duration: any) {
    return `${Math.floor(_duration/60)}:${_duration%60}`;
  }



}
