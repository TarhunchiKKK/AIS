import { TUserBlockingStatus } from "./blockingStatus";
import { UserRoles, UserStatus } from "./enums";
import { TUserPost } from "./userPost";

export type TUser = {
    id: string;

    firstName: string;

    lastName: string;

    email: string;

    password: string;

    createdAt: Date;

    role: UserRoles;

    status: UserStatus;
};

export type TFullUser = TUser & {
    blockingStatus: TUserBlockingStatus;

    post: TUserPost;
};
