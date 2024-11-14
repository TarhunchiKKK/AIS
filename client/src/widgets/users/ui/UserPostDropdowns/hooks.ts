import { findDepartments, findManagements, findPosts } from "./helpers";
import { SelectChangeEvent } from "@mui/material";
import { TFormState } from "../EditUserForm";

export function useDropdowns(user: TFormState, onChange: (_: TFormState) => void) {
    const dropdownsState = {
        managements: findManagements(),
        departments: findDepartments(user.post.management),
        posts: findPosts(user.post.management, user.post.department),
    };

    const changeHandlers = {
        management: (e: SelectChangeEvent) => {
            onChange({
                ...user,
                post: { ...user.post, management: e.target.value || null, department: null, post: null },
            });
        },

        department: (e: SelectChangeEvent) => {
            onChange({ ...user, post: { ...user.post, department: e.target.value || null, post: null } });
        },

        post: (e: SelectChangeEvent) => {
            onChange({ ...user, post: { ...user.post, post: e.target.value || null } });
        },
    };

    return {
        dropdownsState,
        changeHandlers,
    };
}
