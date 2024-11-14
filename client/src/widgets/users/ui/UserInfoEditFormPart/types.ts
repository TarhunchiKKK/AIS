import { TFormState } from "../EditUserForm";

export type TUserInfoEditFormPartProps = {
    user: TFormState;

    onChange: (_: TFormState) => void;
};
