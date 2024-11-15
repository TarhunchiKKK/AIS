import { authTokenManager } from "@/features/auth";
import { TPrivilegentRouteProps } from "./types";
import { rolesApi } from "../../api";
import { Navigate } from "react-router-dom";
import { routes } from "@/shared/constants";
import { Loader } from "@/shared/ui";

// determines whether the user can view this page
export function PrivilegentRoute({ operation, children }: TPrivilegentRouteProps) {
    const authToken = authTokenManager.getToken();

    // token not exists - is no point in making a request
    if (!authToken) {
        return <Navigate to={routes.Home} replace={true} />;
    }

    const { data, error } = rolesApi.useCheckPrmissionsQuery({
        access: authToken,
        data: operation,
    });

    // error in request or user have no permissions
    if (error || data?.available === false) {
        return <Navigate to={routes.Home} replace={true} />;
    }

    switch (data?.available) {
        // request is pending
        case undefined: {
            return (
                <div className="fixed top-0 left-0 w-screen h-screen z-50">
                    <Loader />
                </div>
            );
        }
        // user have neccessary permissions
        case true: {
            return <>{children}</>;
        }
    }
}
