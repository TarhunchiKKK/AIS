import { authTokenManager } from "@/features/auth";
import { TPrivilegentElementProps } from "./types";
import { usersApi } from "@/entities/users";
import { userPermissions } from "../../constants";

// hides an item that the user does not have permission to view
export function PrivilegentElement({ operation, children }: TPrivilegentElementProps) {
    const authToken = authTokenManager.getToken();

    const { data: user } = usersApi.useFindMeQuery(authToken!);

    if (!user) {
        return <></>;
    }

    if (userPermissions[user.role].includes(operation)) {
        return <>{children}</>;
    } else {
        return <></>;
    }
}
