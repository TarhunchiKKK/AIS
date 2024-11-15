import { ArrowBack, Button, ContentWrapper, ErrorMessage } from "@/shared/ui";
import { useEditUser } from "./hooks";
import { TEditUserFormProps } from "./types";
import { UserInfoEditFormPart } from "../UserInfoEditFormPart";
import { UserPostDropdowns } from "../UserPostDropdowns";

export function EditUserForm({ user, onSubmit }: TEditUserFormProps) {
    const { formState, validationErrors, handleChangeState, handleButtonClick } = useEditUser(user, onSubmit);

    return (
        <form className="w-full">
            <div className="flex flex-row justify-start">
                <ArrowBack />
            </div>

            {validationErrors.length > 0 && <ErrorMessage content={validationErrors[0]} />}

            <div className="mb-4 md:mb-8 relative">
                <ContentWrapper>
                    <h3 className="mb-3 md:mb-6 text-center font-bold text-lg sm:text-xl lg:text-2xl">Основное</h3>

                    <UserInfoEditFormPart user={formState} onChange={handleChangeState} />
                </ContentWrapper>
            </div>

            <div className="mb-4 md:mb-8">
                <ContentWrapper>
                    <h3 className="mb-3 md:mb-6 text-center font-bold text-lg sm:text-xl lg:text-2xl">Должность</h3>

                    <UserPostDropdowns user={formState} onChange={handleChangeState} />
                </ContentWrapper>
            </div>

            <div className="flex justify-center">
                <Button
                    content="Отправить"
                    size="lg"
                    disabled={validationErrors.length > 0}
                    onClick={handleButtonClick}
                />
            </div>
        </form>
    );
}
