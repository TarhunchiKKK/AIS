import { UserStatus } from "@/entities/users";
import { SelectChangeEvent } from "@mui/material";
import { TFormState } from "../EditUserForm";

export function useInputs(user: TFormState, onChange: (_: TFormState) => void) {
    const changeHandlers = {
        firstName: (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange({ ...user, firstName: e.target.value });
        },

        lastName: (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange({ ...user, lastName: e.target.value });
        },

        status: (e: SelectChangeEvent) => {
            onChange({
                ...user,
                blockingStatus: { ...user.blockingStatus, status: e.target.value as UserStatus },
            });
        },

        reason: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChange({
                ...user,
                blockingStatus: { ...user.blockingStatus, reason: e.target.value || null },
            });
        },
    };

    return { changeHandlers };
}
