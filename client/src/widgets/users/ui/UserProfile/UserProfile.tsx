import { MdModeEditOutline } from "react-icons/md";
import { dateFormatter } from "@/shared/utils";
import { TUserProfileProps } from "./types";
import { renderUserPost, renderUserStatus } from "./ui";
import { Link } from "react-router-dom";
import { routes } from "@/shared/constants";
import { iconSize } from "./constants";
import { ArrowBack } from "@/shared/ui";

export function UserProfile({ user }: TUserProfileProps) {
    return (
        <>
            <div className="flex flex-row justify-start mb-1 md:mb-2">
                <ArrowBack />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-3">
                <div className="flex flex-col justify-between items-start gap-2 md:gap-3 max-w-[90%] md:max-w-[70%]">
                    <span className="text-lg sm:text-xl font-bold">{`${user.lastName} ${user.firstName}`}</span>
                    <span className="text-sm sm:text-base">{user.email}</span>
                    <span className="text-sm sm:text-base">{`Зарегистрирован(а) ${dateFormatter.formatDate(
                        user.createdAt,
                    )}`}</span>
                    {renderUserPost(user.post)}
                </div>

                <div className="flex flex-col justify-between items-start gap-3">
                    {renderUserStatus(user.blockingStatus)}
                </div>
            </div>

            <div className="flex flex-row justify-end">
                <Link to={routes.createEditUserRoute(user.id)} className="rounded-full p-2 hover:bg-slate-200">
                    <MdModeEditOutline size={iconSize} />
                </Link>
            </div>
        </>
    );
}
