import { authTokenManager } from "@/features/auth";
import { TPrivilegentElementProps } from "./types";
import { usersApi } from "@/entities/users";
import { userPermissions } from "../../constants";

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
