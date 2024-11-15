import { ArrowBack, Button, ContentWrapper, ErrorMessage } from "@/shared/ui";
import { useEditUser } from "./hooks";
import { TEditUserFormProps } from "./types";
import { UserInfoEditFormPart } from "../UserInfoEditFormPart";
import { UserPostDropdowns } from "../UserPostDropdowns";

export function EditUserForm({ user, onSubmit }: TEditUserFormProps) {
    const { formState, validationErrors, handleChangeState, handleSubmit } = useEditUser(user, onSubmit);

    return (
        <form onSubmit={handleSubmit} className="w-full">
            {validationErrors.length > 0 && <ErrorMessage content={validationErrors[0]} />}

            <div className="mb-8 relative">
                <ContentWrapper>
                    <h3 className="mb-6 text-center font-bold text-2xl">Основное</h3>

                    <UserInfoEditFormPart user={formState} onChange={handleChangeState} />

                    <div className="absolute top-4 left-4">
                        <ArrowBack />
                    </div>
                </ContentWrapper>
            </div>

            <div className="mb-8">
                <ContentWrapper>
                    <h3 className="mb-6 text-center font-bold text-2xl">Должность</h3>

                    <UserPostDropdowns user={formState} onChange={handleChangeState} />
                </ContentWrapper>
            </div>

            <div className="flex justify-center">
                <Button content="Отправить" size="lg" disabled={validationErrors.length > 0} />
            </div>
        </form>
    );
}
