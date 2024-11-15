import { ArrowBack, ContentWrapper } from "@/shared/ui";
import { UsersTable } from "@/widgets/users";

export function AdminPage() {
    return (
        <ContentWrapper>
            <div className="mb-2 flex flex-row justify-start">
                <ArrowBack />
            </div>

            <UsersTable />
        </ContentWrapper>
    );
}
