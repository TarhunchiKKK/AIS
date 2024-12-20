import { UserStatus } from "./enums";
import { TUser } from "./user";

export type TUserBlockingStatus = {
    id: string;

    status: UserStatus;

    blockingTime: Date | null;

    reason: string | null;

    user: TUser;
};
