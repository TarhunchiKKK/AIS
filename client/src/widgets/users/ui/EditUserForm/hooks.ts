import { usersApi } from "@/entities/users";
import { TFormState, TUserData } from "./types";
import { FormEvent, useState } from "react";
import { trimFormState } from "./helpers";
import { authTokenManager } from "@/features/auth";

export function useEditUser(user: TUserData, onSubmit: () => void) {
    const [updateUser] = usersApi.useUpdateMutation();

    const [formState, setFormState] = useState(() => trimFormState(user));

    const handleChangeState = (state: TFormState) => {
        setFormState(state);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const authToken = authTokenManager.getToken();

        await updateUser({
            userId: user.id,
            data: formState,
            access: authToken!,
        });

        onSubmit();
    };

    return {
        formState,
        handleChangeState,
        handleSubmit,
    };
}
