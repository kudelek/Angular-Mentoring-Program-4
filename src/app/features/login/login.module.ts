import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmailValidatorDirective } from 'src/app/shared/directives/validator.directive';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    EmailValidatorDirective
  ]
})
export class LoginModule { }
