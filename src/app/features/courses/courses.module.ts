import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesComponent } from './courses.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
