import { UserStatus } from "../enums/user-status.enum";

export class ChangeUserStatusDto {
    status: UserStatus;

    reason?: string;

    user: {
        id: string;
    };
}
