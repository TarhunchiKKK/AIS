import { authApi, authTokenManager } from "@/features/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { TFormState } from "./types";
import { validateFormState } from "./helpers";
import { useNavigate } from "react-router-dom";
import { routes } from "@/shared/constants";

export function useSignInForm() {
    const navigate = useNavigate();

    const [signIn] = authApi.useSignInMutation();

    const [formState, setFormState] = useState<TFormState>({
        email: "",
        password: "",
    });
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    const changeFormState = (newState: TFormState) => {
        setFormState(newState);
        const { errors } = validateFormState(newState);
        setValidationErrors(errors);
    };

    const handlers = {
        changeEmail: (e: ChangeEvent<HTMLInputElement>) => {
            changeFormState({
                ...formState,
                email: e.target.value,
            });
        },
        changePassword: (e: ChangeEvent<HTMLInputElement>) => {
            changeFormState({
                ...formState,
                password: e.target.value,
            });
        },
        submit: async (e: FormEvent) => {
            e.preventDefault();

            const { data, error } = await signIn(formState);

            if (error) {
                setValidationErrors([error as string]);
            } else {
                authTokenManager.setToken(data.access);
                navigate(routes.Home);
            }
        },
    };

    return {
        formState,
        handlers,
        errors: validationErrors,
    };
}
