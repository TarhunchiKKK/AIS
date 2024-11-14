import { MdModeEditOutline } from "react-icons/md";
import { dateFormatter } from "@/shared/utils";
import { TUserProfileProps } from "./types";
import { renderUserStatus } from "./ui";
import { Link } from "react-router-dom";
import { routes } from "@/shared/constants";
import { iconSize } from "./constants";

export function UserProfile({ user }: TUserProfileProps) {
    return (
        <>
            <div className="flex flex-row justify-between items-start">
                <div className="flex flex-col justify-between items-start gap-3">
                    <span>{`${user.lastName} ${user.firstName}`}</span>
                    <span>{user.email}</span>
                    <span>{`Зарегистрирован(а) ${dateFormatter.formatDate(user.createdAt)}`}</span>
                </div>

                <div className="flex flex-col justify-between items-start gap-3">
                    {renderUserStatus(user.blockingStatus)}
                </div>
            </div>

            <div className="flex flex-row justify-end">
                <Link
                    to={routes.createEditUserRoute(user.id)}
                    state={user}
                    className="rounded-full p-2 hover:bg-slate-200"
                >
                    <MdModeEditOutline size={iconSize} />
                </Link>
            </div>
        </>
    );
}
