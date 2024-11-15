import { Navigate } from "react-router-dom";
import { authTokenManager } from "../../utils";
import { TProtectedRouteProps } from "./types";

export function ProtectedRoute({ redirectRoute, children }: TProtectedRouteProps) {
    const authToken = authTokenManager.getToken();

    if (!authToken) {
        return <Navigate to={redirectRoute} replace={true} />;
    }

    return <>{children}</>;
}
