import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { TUserPostDropdownsProps } from "./types";
import { useDropdowns } from "./hooks";

export function UserPostDropdowns({ post, onChange }: TUserPostDropdownsProps) {
    const { dropdownsState, changeHandlers } = useDropdowns(post, onChange);

    return (
        <div className="flex flex-row justify-between items-center">
            <div className="mb-4 min-w-32">
                <FormControl fullWidth>
                    <InputLabel>Управление </InputLabel>

                    <Select
                        label="Управление"
                        value={post.management ?? ""}
                        onChange={changeHandlers.management}
                        disabled={dropdownsState.managements.length === 0}
                    >
                        {dropdownsState.managements.map((management, index) => (
                            <MenuItem key={index} value={management}>
                                {management}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <div className="mb-4 min-w-32">
                <FormControl fullWidth>
                    <InputLabel>Отдел</InputLabel>

                    <Select
                        label="Отдел"
                        value={post.department ?? ""}
                        onChange={changeHandlers.department}
                        disabled={dropdownsState.departments.length === 0}
                    >
                        {dropdownsState.departments.map((department, index) => (
                            <MenuItem key={index} value={department}>
                                {department}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <div className="mb-4 min-w-32">
                <FormControl fullWidth>
                    <InputLabel>Должность</InputLabel>

                    <Select
                        label="Отдел"
                        value={post.post ?? ""}
                        onChange={changeHandlers.post}
                        disabled={dropdownsState.posts.length === 0}
                    >
                        {dropdownsState.posts.map((post, index) => (
                            <MenuItem key={index} value={post}>
                                {post}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}
