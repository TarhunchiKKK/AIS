import { TUserBlockingStatus, UserStatus } from "@/entities/users";
import { dateFormatter } from "@/shared/utils";

export const renderUserStatus = (userStatus: TUserBlockingStatus) => {
    switch (userStatus.status) {
        case UserStatus.ACTIVE: {
            return <span className="text-xl text-green-600">Active</span>;
        }
        case UserStatus.BLOCKED: {
            return (
                <>
                    <span className="text-red-600">
                        Blocked from {dateFormatter.formatDate(userStatus.blockingTime!)}
                    </span>

                    <span className="text-red-600">Reason: {userStatus.reason!}</span>
                </>
            );
        }
    }
};
