import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent, CourseInfoComponent, SearchComponent } from './components';
import { InputComponent } from './components/input/input.component';
import { EmailValidatorDirective } from './directives/validator.directive';

const COMPONENTS: Array<any> = [ButtonComponent, SearchComponent, InputComponent, CourseInfoComponent];

@NgModule({
  declarations: [...COMPONENTS, EmailValidatorDirective],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [...COMPONENTS, EmailValidatorDirective]
})
export class SharedModule { }
