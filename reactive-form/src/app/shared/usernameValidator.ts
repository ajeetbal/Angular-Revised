import { AbstractControl } from "@angular/forms";

export function usernameValidator(control: AbstractControl): { [key: string]: boolean } | null {

    if (control.value.startsWith('admin')) {
        return { nameValid: true };
    }
    return null;
}