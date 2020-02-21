import { AbstractControl } from "@angular/forms";

export function passwordvalidator(control: AbstractControl): { [key: string]: boolean } | null {
    let password = control.get('password');
    let cPassword = control.get('confirmPassword');
    if (password && cPassword &&  password.value !== cPassword.value) {
        return { isValidationWorked: true };
    }
    return null;
}