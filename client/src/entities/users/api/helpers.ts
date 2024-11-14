import { dateFormatter } from "@/shared/utils";
import { TFullUser } from "../models";
import { TFullUserResponse } from "./types";

export function transformFullUser(user: TFullUserResponse): TFullUser {
    return {
        ...user,
        createdAt: dateFormatter.createDateFromStr(user.createdAt),
    };
}
