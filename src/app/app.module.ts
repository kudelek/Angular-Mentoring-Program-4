import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { SessionStorageService } from './auth/services/session-storage.service';
import { CourseFormComponent } from './features/course-form/course-form.component';
import { CourseComponent } from './features/course/course.component';
import { CoursesModule } from './features/courses/courses.module';
import { HeaderComponent } from './features/header/header.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { SharedModule } from './shared/shared.module';
import { effects, reducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HeaderComponent,
    CourseFormComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [SessionStorageService, Window],
  bootstrap: [AppComponent]
})
export class AppModule { }
