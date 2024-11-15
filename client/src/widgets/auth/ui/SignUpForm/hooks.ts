import { authApi, authTokenManager } from "@/features/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { TFormState } from "./types";
import { validateFormState } from "./helpers";
import { useNavigate } from "react-router-dom";
import { routes } from "@/shared/constants";

export function useSignUpForm() {
    const navigate = useNavigate();

    const [signUp] = authApi.useSignUpMutation();

    const [formState, setFormState] = useState<TFormState>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    const changeFormState = (newState: TFormState) => {
        setFormState(newState);
        const errors = validateFormState(newState);
        setValidationErrors(errors);
    };

    const handlers = {
        changeFirstName: (e: ChangeEvent<HTMLInputElement>) => {
            changeFormState({
                ...formState,
                firstName: e.target.value,
            });
        },
        changeLastName: (e: ChangeEvent<HTMLInputElement>) => {
            changeFormState({
                ...formState,
                lastName: e.target.value,
            });
        },
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
        changeConfirmPassword: (e: ChangeEvent<HTMLInputElement>) => {
            changeFormState({
                ...formState,
                confirmPassword: e.target.value,
            });
        },
        submit: async (e: FormEvent) => {
            e.preventDefault();

            const { data, error } = await signUp({
                firstName: formState.firstName,
                lastName: formState.lastName,
                email: formState.email,
                password: formState.password,
            });

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
        validationErrors,
    };
}
