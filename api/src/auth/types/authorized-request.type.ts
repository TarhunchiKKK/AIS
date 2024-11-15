import { TRequest } from "src/shared/types/request.type";
import { TUserProfile } from "./user-profile.type";

// request object become so after JwtAuthGuard
export type TAuthorizedRequest = TRequest & {
    user: TUserProfile;
};
