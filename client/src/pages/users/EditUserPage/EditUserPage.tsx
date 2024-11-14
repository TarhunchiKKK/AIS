import { TUserPost } from "@/entities/users";
import { ContentWrapper } from "@/shared/ui";
import { UserPostDropdowns } from "@/widgets/users/ui";
import { useState } from "react";

export function EditUserPage() {
    const [state, setState] = useState<TUserPost>({
        department: null,
        management: null,
        post: null,
        id: "",
    });

    return (
        <ContentWrapper>
            <UserPostDropdowns post={state} onChange={(value: TUserPost) => setState(value)} />
        </ContentWrapper>
    );
}
