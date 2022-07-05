import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components';

const COMPONENTS: Array<any> = [ButtonComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
