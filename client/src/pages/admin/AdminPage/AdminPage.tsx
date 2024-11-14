import { ContentWrapper } from "@/shared/ui";
import { UsersTable } from "@/widgets/users";

export function AdminPage() {
    return (
        <ContentWrapper>
            <UsersTable />
        </ContentWrapper>
    );
}
