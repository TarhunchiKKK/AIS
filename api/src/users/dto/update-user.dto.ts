import { UserBlockingStatus } from "../entities/user-blocking-status.entity";
import { UserPost } from "../entities/user-post.entity";

export class UpdateUserDto {
    firstName?: string;

    lastName?: string;

    blockingStatus?: Pick<UserBlockingStatus, "status" | "status" | "reason">;

    post?: Pick<UserPost, "management" | "department" | "post">;
}
