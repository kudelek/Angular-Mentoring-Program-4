import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseInfoComponent } from '../course-info/course-info.component';
import { CourseCardComponent } from './course-card.component';



@NgModule({
  declarations: [CourseCardComponent, CourseInfoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [CourseCardComponent]
})
export class CourseCardModule { }
