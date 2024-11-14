import { UserRoles } from "@/entities/users";
import { Operations } from "../types";

export const userPermissions: Record<UserRoles, Operations[]> = {
    [UserRoles.ADMIN]: [Operations.SEE_USERS, Operations.CHANGE_USER_STATUS],
    [UserRoles.USER]: [],
};