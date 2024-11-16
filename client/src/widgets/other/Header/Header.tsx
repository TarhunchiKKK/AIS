import { authTokenManager } from "@/features/auth";
import { PrivilegentElement } from "@/features/roles";
import { Operations } from "@/features/roles/types";
import { routes } from "@/shared/constants";
import { Button, ContentWrapper } from "@/shared/ui";
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
        <header className="py-2 md:py-4 px-4 md:px-0">
            <div className="container mx-auto">
                <ContentWrapper>
                    <div className="flex flex-row-reverse justify-between items-center">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-8">
                            <PrivilegentElement operation={Operations.SEE_USERS}>
                                <Link to={routes.Admin} className="underline">
                                    Пользователи
                                </Link>
                            </PrivilegentElement>
                            <Button content={buttonContent} size="md" onClick={handleButtonClick} />
                        </div>

                        <Link to={routes.Home}>
                            <img src={Logo} className="w-12 h-12" />
                        </Link>
                    </div>
                </ContentWrapper>
            </div>
        </header>
    );
}
