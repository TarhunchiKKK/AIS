import { ContentWrapper } from "@/shared/ui";
import { UserProfile } from "@/widgets/users";
import { useUser } from "./hooks";

export function UserPage() {
    const { user } = useUser();

    return <ContentWrapper>{user && <UserProfile user={user} />}</ContentWrapper>;
}
