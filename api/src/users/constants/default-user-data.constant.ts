import { UserStatus } from "../enums/user-status.enum";
import { UserRoles } from "../../roles/enums/user-roles.enum";

// using in user creating
export const defaultUserBlockingStatus = {
    status: UserStatus.ACTIVE,
    blokingTime: null,
    reason: null,
};

// using in user creating
export const defaultUserPost = {
    management: null,
    department: null,
    post: null,
};

// using in user creating
export const defaultUserRole = UserRoles.USER;
