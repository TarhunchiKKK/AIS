import { Button } from "@/shared/ui";
import { Link } from "react-router-dom";
import { routes } from "@/shared/constants";
import { TextField } from "@mui/material";
import { useSignUpForm } from "./hooks";

export function SignUpForm() {
    const { formState, changeHandlers, handleSubmit, error } = useSignUpForm();

    return (
        <form onSubmit={handleSubmit} className="w-full px-6 py-6">
            <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

            <div className="mb-4">
                <TextField
                    label="Имя"
                    fullWidth
                    value={formState.firstName}
                    onChange={changeHandlers.firstName}
                />
            </div>

            <div className="mb-4">
                <TextField
                    label="Фамилия"
                    fullWidth
                    value={formState.lastName}
                    onChange={changeHandlers.lastName}
                />
            </div>

            <div className="mb-4">
                <TextField
                    label="Email"
                    fullWidth
                    value={formState.email}
                    onChange={changeHandlers.email}
                />
            </div>

            <div className="mb-8">
                <TextField
                    label="Пароль"
                    fullWidth
                    type="password"
                    value={formState.password}
                    onChange={changeHandlers.password}
                />
            </div>

            <div className="flex flex-row justify-center items-center mb-8">
                <Button size="lg" content="Отправить" />
            </div>

            <Link to={routes.SignUp} className="block mx-auto text-center text-blue">
                Don't have an account?
            </Link>
        </form>
    );
}
