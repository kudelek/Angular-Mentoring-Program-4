import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared/shared.module';
import { CourseCardModule } from '../course-card/course-card.module';
import { CourseFormComponent } from '../course-form/course-form.component';
import { HeaderComponent } from '../header/header.component';
import { InfoComponent } from '../info/info.component';
import { LoginComponent } from '../login/login.component';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    CoursesComponent,
    HeaderComponent,
    InfoComponent,
    CourseFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    CourseCardModule
  ],
  exports: [CoursesComponent],
})
export class CoursesModule {}
