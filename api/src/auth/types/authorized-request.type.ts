import { TRequest } from "src/shared/types/request.type";
import { TUserProfile } from "./user-profile.type";

export type TAuthorizedRequest = TRequest & {
    user: TUserProfile;
};
