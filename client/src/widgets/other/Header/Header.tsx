import { authTokenManager } from "@/features/auth";
import { PrivilegentElement } from "@/features/roles";
import { Operations } from "@/features/roles/types";
import { routes } from "@/shared/constants";
import { Button, ContentWrapper } from "@/shared/ui";
import { Link, useNavigate } from "react-router-dom";

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
                        <Button content={buttonContent} size="lg" onClick={handleButtonClick} />

                        <PrivilegentElement operation={Operations.SEE_USERS}>
                            <Link to={routes.Admin} className="underline">
                                Пользователи
                            </Link>
                        </PrivilegentElement>
                    </div>
                </ContentWrapper>
            </div>
        </header>
    );
}
