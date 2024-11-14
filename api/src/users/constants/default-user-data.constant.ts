import { UserStatus } from "../enums/user-status.enum";
import { UserRoles } from "../../roles/enums/user-roles.enum";

export const defaultUserBlockingStatus = {
    status: UserStatus.ACTIVE,
    blokingTime: null,
    reason: null,
};

export const defaultUserRole = UserRoles.USER;
