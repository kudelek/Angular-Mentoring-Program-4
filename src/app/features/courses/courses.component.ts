import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

const mockedCourseList = [
  {
    id: "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
    title: "JavaScript",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
    creationDate: "8/3/2021",
    duration: 160,
    authors: ["Vasiliy Dobkin", "Nicolas Kim"],
  },
  {
    id: "b5630fdd-7bf7-4d39-b75a-2b5906fd0916",
    title: "Angular",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.`,
    creationDate: "10/11/2020",
    duration: 210,
    authors: ["Anna Sidorenko", "Valentina Larina"],
  },
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  subscription: Subscription;
  courses: any[] = [];

  constructor(private authorsStoreService: AuthorsStoreService,
    private coursesStoreService: CoursesStoreService) {
      console.log('constructor')

      this.subscription = this.coursesStoreService.getAll().subscribe(course => {
        console.log('courses subscription course',course);
        this.courses.push(...course.result);
      })
    console.log('courses courses: ',this.courses)

  }

  ngOnInit(): void {

  }

  infoTitle: string = 'Your list is empty';
  infoText: string = `Please use the '<strong>Add new course</strong>' button<br/>to add your first course`;

  isEmpty: boolean = CoursesComponent.length === 0 ? true : false;

  onCourseDelete() {
    console.log('deleted: ');
  }

  onCourseEdit() {
    console.log('edited: ');
  }

  onAddCourse() {
    console.log('add new course:');
  }

  onShowCourse() {
    console.log('show course')
  }


}
