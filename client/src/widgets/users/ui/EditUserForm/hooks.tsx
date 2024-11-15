import { usersApi } from "@/entities/users";
import { TFormState, TUserData } from "./types";
import { useContext, useState, MouseEvent } from "react";
import { trimFormState, validateFormState } from "./helpers";
import { authTokenManager } from "@/features/auth";
import { ModalContext } from "@/shared/ui";
import { EditUserFormModal } from "../EditUserFormModal";
import { toast } from "react-toastify";

export function useEditUser(user: TUserData, onSubmit: () => void) {
    const { open: openModal, close: closeModal } = useContext(ModalContext);
    const [updateUser] = usersApi.useUpdateMutation();

    const [formState, setFormState] = useState(() => trimFormState(user));
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    const handleChangeState = (newState: TFormState) => {
        const errors = validateFormState(newState);
        setValidationErrors(errors);
        setFormState(newState);
    };

    const handleSubmit = async () => {
        const authToken = authTokenManager.getToken();

        await updateUser({
            userId: user.id,
            data: formState,
            access: authToken!,
        });

        onSubmit();

        closeModal();

        toast("Изменения сохранены.");
    };

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        openModal(<EditUserFormModal onSubmit={handleSubmit} />);
    };

    return {
        formState,
        validationErrors,
        handleChangeState,
        handleButtonClick,
    };
}
