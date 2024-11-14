import { TFormState } from "../EditUserForm";

export type TUserPostDropdownsProps = {
    user: TFormState;

    onChange: (_: TFormState) => void;
};
