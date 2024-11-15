import { validateEmail, validateFirstName, validateLastName, validatePassword } from "@/entities/users";
import { TFormState } from "./types";

export function validateFormState(formState: TFormState) {
    const { errors: firstNameErrors } = validateFirstName(formState.firstName);
    const { errors: lastNameErrors } = validateLastName(formState.lastName);
    const { errors: emailErrors } = validateEmail(formState.email);
    const { errors: passwordErrors } = validatePassword(formState.password, formState.confirmPassword);

    const errors = firstNameErrors.concat(lastNameErrors).concat(emailErrors).concat(passwordErrors);

    return errors;
}
