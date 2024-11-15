import { usersApi } from "@/entities/users";
import { authTokenManager } from "@/features/auth";

export function useUsersTable() {
    const authToken = authTokenManager.getToken();

    const { data: users } = usersApi.useFindAllQuery(authToken!);

    return {
        users,
    };
}
