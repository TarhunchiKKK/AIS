import { Button, ErrorMessage } from "@/shared/ui";
import { useSignInForm } from "./hooks";
import { Link } from "react-router-dom";
import { routes } from "@/shared/constants";
import { TextField } from "@mui/material";
import { haveEmptyFields } from "@/shared/utils/validation";

export function SignInForm() {
    const { formState, handlers, errors } = useSignInForm();

    return (
        <form onSubmit={handlers.submit} className="w-full px-4 py-2 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">Sign In</h2>

            {errors.length > 0 && <ErrorMessage content={errors[0]} />}

            <div className="mb-4">
                <TextField label="Email" fullWidth value={formState.email} onChange={handlers.changeEmail} />
            </div>

            <div className="mb-4 md:mb-8">
                <TextField
                    label="Пароль"
                    fullWidth
                    type="password"
                    value={formState.password}
                    onChange={handlers.changePassword}
                />
            </div>

            <div className="flex flex-row justify-center items-center mb-4 md:mb-8">
                <Button size="lg" content="Отправить" disabled={haveEmptyFields(formState) || errors.length > 0} />
            </div>

            <Link to={routes.SignUp} className="block mx-auto text-center text-blue">
                Нет аккаунта?
            </Link>
        </form>
    );
}
