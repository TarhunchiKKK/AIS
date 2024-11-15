import { Button } from "@/shared/ui";
import { TEditUserFormModalProps } from "./types";

export function EditUserFormModal({ onSubmit }: TEditUserFormModalProps) {
    return (
        <>
            <h4 className="text-center text-xl mb-6">Уверены, что хотите сохранить изменения?</h4>

            <div className="flex flex-row justify-center">
                <Button content="Отправить" size="lg" onClick={onSubmit} />
            </div>
        </>
    );
}