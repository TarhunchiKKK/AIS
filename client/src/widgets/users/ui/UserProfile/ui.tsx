import { TUserBlockingStatus, TUserPost, UserStatus } from "@/entities/users";
import { dateFormatter } from "@/shared/utils";

export const renderUserStatus = (userStatus: TUserBlockingStatus) => {
    switch (userStatus.status) {
        case UserStatus.ACTIVE: {
            return <span className="text-xl text-green-600">Active</span>;
        }
        case UserStatus.BLOCKED: {
            const blockingTime = userStatus.blockingTime ? dateFormatter.formatDate(userStatus.blockingTime!) : "";

            return (
                <>
                    <span className="text-red-600">Blocked from {blockingTime}</span>

                    <span className="text-red-600">Reason: {userStatus.reason!}</span>
                </>
            );
        }
    }
};

export const renderUserPost = (userPost: TUserPost) => {
    const postItems = [];

    if (userPost.management) {
        postItems.push(`Управление ${userPost.management.toLowerCase()}`);
    }
    if (userPost.department) {
        postItems.push(`Отдел ${userPost.department.toLowerCase()}`);
    }
    if (userPost.post) {
        postItems.push(userPost.post);
    }

    return <>{postItems.length > 0 && <span>{postItems.join(", ")}</span>}</>;
};
