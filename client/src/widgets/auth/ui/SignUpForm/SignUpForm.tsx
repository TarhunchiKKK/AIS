import { Button, ErrorMessage } from "@/shared/ui";
import { Link } from "react-router-dom";
import { routes } from "@/shared/constants";
import { TextField } from "@mui/material";
import { useSignUpForm } from "./hooks";

export function SignUpForm() {
    const { formState, handlers, validationErrors } = useSignUpForm();

    return (
        <form onSubmit={handlers.submit} className="w-full px-6 py-6">
            <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

            {validationErrors.length > 0 && <ErrorMessage content={validationErrors[0]} />}

            <div className="mb-4">
                <TextField label="Имя" fullWidth value={formState.firstName} onChange={handlers.changeFirstName} />
            </div>

            <div className="mb-4">
                <TextField label="Фамилия" fullWidth value={formState.lastName} onChange={handlers.changeLastName} />
            </div>

            <div className="mb-4">
                <TextField label="Email" fullWidth value={formState.email} onChange={handlers.changeEmail} />
            </div>

            <div className="mb-4">
                <TextField
                    label="Пароль"
                    fullWidth
                    type="password"
                    value={formState.password}
                    onChange={handlers.changePassword}
                />
            </div>

            <div className="mb-8">
                <TextField
                    label="Подтвердите пароль"
                    fullWidth
                    type="password"
                    value={formState.confirmPassword}
                    onChange={handlers.changeConfirmPassword}
                />
            </div>

            <div className="flex flex-row justify-center items-center mb-8">
                <Button size="lg" content="Отправить" disabled={validationErrors.length > 0} />
            </div>

            <Link to={routes.SignIn} className="block mx-auto text-center text-blue">
                Already have an account?
            </Link>
        </form>
    );
}
