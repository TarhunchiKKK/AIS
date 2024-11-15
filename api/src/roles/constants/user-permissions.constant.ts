import { Operations } from "../enums/operations.enum";
import { UserRoles } from "../enums/user-roles.enum";

// this object defines the operations available to users
export const userPermissions: Record<UserRoles, Operations[]> = {
    [UserRoles.ADMIN]: [Operations.SEE_USERS, Operations.UPDATE_USER],
    [UserRoles.USER]: [],
};
