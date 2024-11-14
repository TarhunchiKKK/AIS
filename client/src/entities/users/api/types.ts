import { TFullUser, UserStatus } from "../models";

export type TCreateUsserDto = {
    firstName: string;

    lastName: string;

    email: string;

    password: string;
};

export type TChangeUserStatusDto = {
    status: UserStatus;

    reason?: string;

    user: {
        id: string;
    };
};

export type TFullUserResponse = TFullUser & {
    createdAt: string;
};
