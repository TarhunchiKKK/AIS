import { UserRoles } from "src/roles/enums/user-roles.enum";

// data< that can be extracted from user JWT token
export type TUserProfile = {
    id: string;

    email: string;

    password: string;

    role: UserRoles;
};
