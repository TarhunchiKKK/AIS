import { TAuthorizedRequest } from "@/shared/types";
import { TFullUser, TUserBlockingStatus, TUserPost } from "../models";

export type TCreateUsserDto = {
    firstName: string;

    lastName: string;

    email: string;

    password: string;
};

export type TUpdateUserDto = {
    firstName?: string;

    lastName?: string;

    blockingStatus?: Pick<TUserBlockingStatus, "status" | "status" | "reason">;

    post?: Pick<TUserPost, "management" | "department" | "post">;
};

export type TUpdateUserQueryArgs = TAuthorizedRequest<TUpdateUserDto> & {
    userId: string;
};

export type TFullUserResponse = TFullUser & {
    createdAt: string;

    blockingStatus: TUserBlockingStatus & {
        blokingTime: string | null;
    };
};
