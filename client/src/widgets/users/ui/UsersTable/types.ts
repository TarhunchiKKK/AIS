import { TUserBlockingStatus } from "@/entities/users";

export type TUserData = {
    id: string;

    firstName: string;

    lastName: string;

    email: string;

    createdAt: Date;

    blockingStatus: TUserBlockingStatus;
};
