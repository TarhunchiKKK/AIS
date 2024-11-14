import { dateFormatter } from "@/shared/utils";
import { TUserData } from "./types";
import { Link } from "react-router-dom";
import { routes } from "@/shared/constants";

export const renderHeaders = () => {
    return (
        <tr>
            <th className="text-left">ФИО</th>
            <th className="text-left">Email</th>
            <th className="text-left">дата регистрации</th>
            <th className="text-left">Статус</th>
        </tr>
    );
};

export const renderRow = (userData: TUserData) => {
    return (
        <tr
            key={userData.id}
            className="table-row h-12 px-2 py-4 rounded-lg overflow-hidden hover:bg-gray-200 cursor-pointer"
        >
            <td className="text-left">
                <Link to={routes.createUserRoute(userData.id)}>{`${userData.lastName} ${userData.firstName}`}</Link>
            </td>

            <td className="text-left">{userData.email}</td>

            <td className="text-left">{dateFormatter.formatDate(userData.createdAt)}</td>

            <td className="text-left">{userData.blockingStatus.status}</td>
        </tr>
    );
};
