import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';

const COMPONENTS: [] = [];

@NgModule({
  declarations: [...COMPONENTS, CustomButtonComponent],
  imports: [
    CommonModule, ...COMPONENTS
  ]
})
export class SharedModule { }
