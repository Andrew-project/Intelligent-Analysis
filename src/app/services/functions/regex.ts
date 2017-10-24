import {FormControl} from '@angular/forms';
export function IsPositiveInt (ctrl: FormControl) {
  const r = /^[1-9]\d*$/;
  return r.test(ctrl.value) ? null : {
    validNum: {
      valid: false
    }
  };
}
