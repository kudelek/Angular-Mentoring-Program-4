import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const COMPONENTS: [] = [];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule, ...COMPONENTS
  ]
})
export class SharedModule { }
