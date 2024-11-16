import { ArrowBack, ContentWrapper } from "@/shared/ui";
import { UsersTable } from "@/widgets/users";

export function AdminPage() {
    return (
        <ContentWrapper>
            <div className="mb-1 md:mb-2 flex flex-row justify-start">
                <ArrowBack />
            </div>

            <div className="overflow-x-auto">
                <UsersTable />
            </div>
        </ContentWrapper>
    );
}
