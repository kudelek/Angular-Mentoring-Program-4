import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(emailRegex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = emailRegex.test(control.value);
    return isValid ? {emailRegex: {value: control.value}} : null;
  };
}
