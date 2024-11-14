import { TUserPost } from "@/entities/users";
import { findDepartments, findManagements, findPosts } from "./helpers";
import { SelectChangeEvent } from "@mui/material";

export function useDropdowns(post: TUserPost, onChange: (_: TUserPost) => void) {
    const dropdownsState = {
        managements: findManagements(),
        departments: findDepartments(post.management),
        posts: findPosts(post.management, post.department),
    };

    const changeHandlers = {
        management: (e: SelectChangeEvent) => {
            onChange({ ...post, management: e.target.value || null, department: null, post: null });
        },

        department: (e: SelectChangeEvent) => {
            onChange({ ...post, department: e.target.value || null, post: null });
        },

        post: (e: SelectChangeEvent) => {
            onChange({ ...post, post: e.target.value || null });
        },
    };

    return {
        dropdownsState,
        changeHandlers,
    };
}
