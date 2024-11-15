import { Table } from "@/shared/ui";
import { useUsersTable } from "./hooks";
import { renderHeaders, renderRow } from "./ui";
import { TUserData } from "./types";

export function UsersTable() {
    const { users } = useUsersTable();

    return (
        <div className="min-w-[700px]">
            {users && <Table items={users as TUserData[]} renderItem={renderRow} renderHeaders={renderHeaders} />}
        </div>
    );
}
