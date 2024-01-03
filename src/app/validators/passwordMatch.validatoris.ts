import { AbstractControl } from '@angular/forms';

export const passwordMatchValidator = (group: AbstractControl) => {
  console.log(group)
  if (
    group.value.password === group.value.passwordConfirm &&
    group.value.password.lenght > 0
  ) {
    return null;
  } else return { doPasswordMatch: false };
};
