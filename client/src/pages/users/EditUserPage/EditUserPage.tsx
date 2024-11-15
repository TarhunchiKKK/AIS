import { ContentWrapper } from "@/shared/ui";
import { EditUserForm } from "@/widgets/users/ui/EditUserForm";
import { useEditUser } from "./hooks";

export function EditUserPage() {
    const { user, onSubmit } = useEditUser();

    return <ContentWrapper>{user && <EditUserForm user={user} onSubmit={onSubmit} />}</ContentWrapper>;
}
