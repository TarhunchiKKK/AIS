import { Button, ContentWrapper } from "@/shared/ui";
import { useEditUser } from "./hooks";
import { TEditUserFormProps } from "./types";
import { UserInfoEditFormPart } from "../UserInfoEditFormPart";
import { UserPostDropdowns } from "../UserPostDropdowns";

export function EditUserForm({ user, onSubmit }: TEditUserFormProps) {
    const { formState, handleChangeState, handleSubmit } = useEditUser(user, onSubmit);

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-8">
                <ContentWrapper>
                    <h3 className="mb-6 font-bold text-2xl">Основное</h3>

                    <UserInfoEditFormPart user={formState} onChange={handleChangeState} />
                </ContentWrapper>
            </div>

            <div className="mb-8">
                <ContentWrapper>
                    <h3 className="mb-6 font-bold text-2xl">Должность</h3>

                    <UserPostDropdowns user={formState} onChange={handleChangeState} />
                </ContentWrapper>
            </div>

            <div className="flex justify-center">
                <Button content="Отправить" size="lg" />
            </div>
        </form>
    );
}
