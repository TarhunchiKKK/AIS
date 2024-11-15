import { Button } from "@/shared/ui";
import { TEditUserFormModalProps } from "./types";

// this modal will be opened, when edit user form submits
export function EditUserFormModal({ onSubmit }: TEditUserFormModalProps) {
    return (
        <>
            <h4 className="text-center text-lg md:text-xl min-w-[200px] mb-4 md:mb-6">
                Уверены, что хотите сохранить изменения?
            </h4>

            <div className="flex flex-row justify-center">
                <Button content="Отправить" size="lg" onClick={onSubmit} />
            </div>
        </>
    );
}
