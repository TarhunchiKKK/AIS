import { authTokenManager } from "@/features/auth";
import { TPrivilegentRouteProps } from "./types";
import { rolesApi } from "../../api";
import { Navigate } from "react-router-dom";
import { routes } from "@/shared/constants";
import { Loader } from "@/shared/ui";

export function PrivilegentRoute({ operation, children }: TPrivilegentRouteProps) {
    const authToken = authTokenManager.getToken();

    const { data } = rolesApi.useCheckPrmissionsQuery({
        access: authToken ?? "",
        data: operation,
    });

    switch (data?.available) {
        case undefined: {
            return (
                <div className="fixed top-0 left-0 w-screen h-screen z-50">
                    <Loader />
                </div>
            );
        }
        case false: {
            return <Navigate to={routes.Home} replace={true} />;
        }
        case true: {
            return <>{children}</>;
        }
    }
}
