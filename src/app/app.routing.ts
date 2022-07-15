import { RouterModule, Routes } from "@angular/router";
import { CourseFormComponent } from "./features/course-form/course-form.component";
import { CourseComponent } from "./features/course/course.component";
import { CoursesComponent } from "./features/courses/courses.component";
import { LoginComponent } from "./features/login/login.component";
import { RegistrationComponent } from "./features/registration/registration.component";

const appRoutes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/add', component: CourseFormComponent},
  {path: 'courses/:id', component: CourseComponent},
  {path: 'courses/edit/:id', component: CourseFormComponent},
  {path: '', redirectTo: 'courses', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
