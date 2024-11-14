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
