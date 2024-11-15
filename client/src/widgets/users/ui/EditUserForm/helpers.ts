import { validateFirstName, validateLastName } from "@/entities/users";
import { TFormState } from "./types";

export const trimFormState = (formState: TFormState): TFormState => {
    return {
        firstName: formState.firstName,
        lastName: formState.lastName,
        blockingStatus: {
            status: formState.blockingStatus.status,
            reason: formState.blockingStatus.reason,
        },
        post: {
            management: formState.post.management,
            department: formState.post.department,
            post: formState.post.post,
        },
    };
};

export function validateFormState(formState: TFormState) {
    const { errors: firstNameErrors } = validateFirstName(formState.firstName);
    const { errors: lastNameErrors } = validateLastName(formState.lastName);

    const errors = firstNameErrors.concat(lastNameErrors);

    return errors;
}
