import { authTokenManager } from "@/features/auth";
import { TPrivilegentRouteProps } from "./types";
import { rolesApi } from "../../api";
import { Navigate } from "react-router-dom";
import { routes } from "@/shared/constants";
import { Loader } from "@/shared/ui";

export function PrivilegentRoute({ operation, children }: TPrivilegentRouteProps) {
    const authToken = authTokenManager.getToken();

    // отсутствует токен - нет смысла делать запрос
    if (!authToken) {
        return <Navigate to={routes.Home} replace={true} />;
    }

    const { data, error } = rolesApi.useCheckPrmissionsQuery({
        access: authToken,
        data: operation,
    });

    // ошибка при запросе/нет прав
    if (error || data?.available === false) {
        return <Navigate to={routes.Home} replace={true} />;
    }

    switch (data?.available) {
        // запрос еще не завершен
        case undefined: {
            return (
                <div className="fixed top-0 left-0 w-screen h-screen z-50">
                    <Loader />
                </div>
            );
        }
        // есть права
        case true: {
            return <>{children}</>;
        }
    }
}
