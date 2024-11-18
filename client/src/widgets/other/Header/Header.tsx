import { authTokenManager } from "@/features/auth";
import { PrivilegentElement } from "@/features/roles";
import { Operations } from "@/features/roles/types";
import { routes } from "@/shared/constants";
import { Button } from "@/shared/ui";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo.png";

export function Header() {
    const navigate = useNavigate();
    const authToken = authTokenManager.getToken();

    const buttonContent = authToken ? "Выйти" : "Войти";

    const handleButtonClick = () => {
        if (authToken) {
            authTokenManager.resetToken();
        }
        navigate(routes.SignIn);
    };

    return (
        <header className="px-4 md:px-0 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-row-reverse justify-between items-center py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-8">
                        <PrivilegentElement operation={Operations.SEE_USERS}>
                            <Link to={routes.Admin} className="underline">
                                Пользователи
                            </Link>
                        </PrivilegentElement>
                        <Button content={buttonContent} size="md" onClick={handleButtonClick} />
                    </div>

                    <Link to={routes.Home}>
                        <img src={Logo} className="w-16 h-16" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
