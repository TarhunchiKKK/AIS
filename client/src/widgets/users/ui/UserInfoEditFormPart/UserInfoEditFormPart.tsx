import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useInputs } from "./hooks";
import { TUserInfoEditFormPartProps } from "./types";
import { UserStatus } from "@/entities/users";

export function UserInfoEditFormPart({ user, onChange }: TUserInfoEditFormPartProps) {
    const { changeHandlers } = useInputs(user, onChange);

    return (
        <div className="flex flex-row justify-between items-start">
            <div className="mb-4 h-full flex flex-col justify-between gap-4">
                <TextField
                    label="Фамилия"
                    variant="outlined"
                    value={user.lastName}
                    onChange={changeHandlers.lastName}
                />

                <TextField label="Имя" variant="outlined" value={user.firstName} onChange={changeHandlers.firstName} />
            </div>

            <div className="mb-4 h-full flex flex-col justify-between gap-4">
                <div className="w-[235px]">
                    <FormControl fullWidth>
                        <InputLabel>Статус</InputLabel>

                        <Select label="Статус" value={user.blockingStatus.status} onChange={changeHandlers.status}>
                            {Object.values(UserStatus).map((status, index) => (
                                <MenuItem key={index} value={status}>
                                    {status}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                {user.blockingStatus.status === UserStatus.BLOCKED && (
                    <TextField
                        label="Причина"
                        variant="outlined"
                        value={user.blockingStatus.reason}
                        onChange={changeHandlers.reason}
                    />
                )}
            </div>
        </div>
    );
}
