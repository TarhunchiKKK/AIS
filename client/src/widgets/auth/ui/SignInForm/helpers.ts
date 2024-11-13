import { validateEmail, validatePassword } from "../../helpers";
import { TFormState } from "./types";

export function validateFormState(formState: TFormState) {
    const { valid: isEmailValid, errors: emailErrors } = validateEmail(formState.email);
    const { valid: isPasswordValid, errors: passwordErrors } = validatePassword(formState.password, null);

    const isValid = isEmailValid && isPasswordValid;
    const errors = emailErrors.concat(passwordErrors);

    return {
        isValid,
        errors,
    };
}
