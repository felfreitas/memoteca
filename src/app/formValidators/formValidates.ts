import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateComissionRange(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const max = formGroup.get('comissionTotalMax')?.value;
    const min = formGroup.get('comissionTotalMin')?.value;

    console.log("batei aqui dentro da function");
    console.log(max);
    console.log(min);

    // Só valida se ambos os valores existirem
    if (max !== null && min !== null) {
      return max > min ? null : { comissionRangeInvalid: true };
    }

    return null; // Sem erro se algum dos valores não está preenchido
  };
}


export function validateMaxGreaterThanMin(minControl: AbstractControl): (control: AbstractControl) => ValidationErrors | null {
  return (control: AbstractControl): ValidationErrors | null => {
    const min = minControl.value;
    const max = control.value;

    // Valida somente se ambos os valores existirem
    if (min !== null && max !== null) {
      return max > min ? null : { maxLessThanOrEqualToMin: true };
    }

    return null; // Sem erro se algum dos valores estiver vazio
  };
}
