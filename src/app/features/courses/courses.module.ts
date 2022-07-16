import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { routing } from 'src/app/app.routing';
import { SharedModule } from '../../shared/shared.module';
import { CourseCardModule } from '../course-card/course-card.module';
import { InfoComponent } from '../info/info.component';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    CoursesComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    CourseCardModule,
    ReactiveFormsModule,
    routing
  ],
  exports: [CoursesComponent],
})
export class CoursesModule {}
