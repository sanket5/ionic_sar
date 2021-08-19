import { AbstractControl, ValidatorFn } from "@angular/forms";


export function MobNumberValidator(): ValidatorFn {
    return (control: AbstractControl) : { [key: string]: boolean } | null => 
    control.value?.toString().length == 10 ? null : { lengthError: control.value };
  }