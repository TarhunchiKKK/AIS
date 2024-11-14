import { TUserBlockingStatus, TUserPost } from "@/entities/users";

export type TFormState = {
    firstName: string;

    lastName: string;

    blockingStatus: Pick<TUserBlockingStatus, "status" | "reason">;

    post: Pick<TUserPost, "management" | "department" | "post">;
};

export type TUserData = TFormState & {
    id: string;
};

export type TEditUserFormProps = {
    user: TUserData;

    onSubmit: () => void;
};
