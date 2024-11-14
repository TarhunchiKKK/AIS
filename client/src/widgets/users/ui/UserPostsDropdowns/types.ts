import { TUserPost } from "@/entities/users";

export type TUserPostDropdownsProps = {
    post: TUserPost;

    onChange: (_: TUserPost) => void;
};
