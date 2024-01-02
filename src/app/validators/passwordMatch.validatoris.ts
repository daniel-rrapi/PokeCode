import { AbstractControl } from '@angular/forms';
import { User } from '../interfaces/user';

export const passwordMatchValidator = (group: AbstractControl) => {
  if (
    group.value.password === group.value.passwordConfirm &&
    group.value.password.lenght > 0
  ) {
    return null;
  } else return { doPasswordMatch: false };
};
