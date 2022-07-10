import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent, SearchComponent } from './components';
import { InputComponent } from './components/input/input.component';
import { ValidatorDirective } from './directives/validator.directive';

const COMPONENTS: Array<any> = [ButtonComponent, SearchComponent, InputComponent];

@NgModule({
  declarations: [...COMPONENTS, ValidatorDirective, InputComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
