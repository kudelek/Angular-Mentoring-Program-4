import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoComponent } from '../info/info.component';
import { CourseCardComponent } from './course-card.component';



@NgModule({
  declarations: [CourseCardComponent, InfoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [CourseCardComponent]
})
export class CourseCardModule { }
