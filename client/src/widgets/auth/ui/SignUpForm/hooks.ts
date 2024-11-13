import { authApi } from "@/features/auth";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { TFormState } from "./types";

export function useSignUpForm() {
    const [signUp, { error }] = authApi.useSignUpMutation();

    const [formState, setFormState] = useState<TFormState>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const changeHandlers = useMemo(
        () => ({
            firstName: (e: ChangeEvent<HTMLInputElement>) => {
                setFormState((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                }));
            },
            lastName: (e: ChangeEvent<HTMLInputElement>) => {
                setFormState((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                }));
            },
            email: (e: ChangeEvent<HTMLInputElement>) => {
                setFormState((prev) => ({
                    ...prev,
                    email: e.target.value,
                }));
            },
            password: (e: ChangeEvent<HTMLInputElement>) => {
                setFormState((prev) => ({
                    ...prev,
                    password: e.target.value,
                }));
            },
        }),
        [],
    );

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await signUp(formState);
        } catch (error: unknown) {
            console.info(error);
        }
    };

    return {
        formState,
        changeHandlers,
        handleSubmit,
        error,
    };
}
