import { authApi } from "@/features/auth";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { TFormState } from "./types";

export function useSignInForm() {
    const [signIn, { error }] = authApi.useSignInMutation();

    const [formState, setFormState] = useState<TFormState>({
        email: "",
        password: "",
    });

    const changeHandlers = useMemo(
        () => ({
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
            await signIn(formState);
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
